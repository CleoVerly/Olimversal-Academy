# Deploy ke DigitalOcean Droplet (Next.js SSR)

Panduan deploy **Olimversal Academy** ke Droplet Ubuntu, jalan sebagai Node app
(`next start`) di belakang **Nginx** + **HTTPS**, dengan **PM2** sebagai process
manager. Metode update: **git push-to-deploy** (cukup `git push production versi1`
dari laptop → server otomatis build & restart).

Ganti yang ber-CAPS sesuai milikmu:
- `SERVER_IP` → IP Droplet (mis. `159.x.x.x`)
- `DEPLOY_USER` → user di server (mis. `deploy` atau `root`)
- `your-domain.com` → domainmu (boleh skip kalau cuma pakai IP)

---

## 0) Buat Droplet
- DigitalOcean → Create → Droplet → **Ubuntu 24.04 LTS**
- Ukuran: **minimal 2 GB RAM** (build Next butuh memori; 1 GB sering OOM —
  kalau terpaksa 1 GB, tambahkan swap, lihat langkah 1b)
- Tambahkan **SSH key** kamu saat membuat droplet.

---

## 1) Setup awal server (sekali saja)
SSH masuk:
```bash
ssh DEPLOY_USER@SERVER_IP
```

Install Node 22, git, nginx, pnpm, pm2:
```bash
sudo apt update && sudo apt upgrade -y
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs git nginx
sudo npm install -g pnpm pm2
```

### 1b) (Opsional) Tambah swap kalau RAM < 2 GB
```bash
sudo fallocate -l 2G /swapfile && sudo chmod 600 /swapfile
sudo mkswap /swapfile && sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

### 1c) Firewall
```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw --force enable
```

---

## 2) Siapkan folder app + bare repo (push-to-deploy)
```bash
# folder tempat app live
sudo mkdir -p /var/www/olimversal
sudo chown -R $USER:$USER /var/www/olimversal

# bare repo target push
mkdir -p ~/olimversal.git && cd ~/olimversal.git && git init --bare
```

Buat hook yang jalan tiap kali kamu push:
```bash
cat > ~/olimversal.git/hooks/post-receive <<'HOOK'
#!/bin/bash
set -e
export PATH="/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin:$PATH"
APP_DIR=/var/www/olimversal
BRANCH=versi1

echo "→ checkout $BRANCH ke $APP_DIR"
git --work-tree=$APP_DIR --git-dir=$HOME/olimversal.git checkout -f $BRANCH

cd $APP_DIR
echo "→ install deps"
pnpm install --frozen-lockfile
echo "→ build"
pnpm build
echo "→ (re)start pm2"
pm2 restart olimversal 2>/dev/null || pm2 start ecosystem.config.cjs
pm2 save
echo "✓ deploy selesai"
HOOK
chmod +x ~/olimversal.git/hooks/post-receive
```

---

## 3) Dari laptop: tambah remote & push pertama
Di folder proyek (laptop):
```bash
git remote add production DEPLOY_USER@SERVER_IP:olimversal.git
git push production versi1
```
Push ini akan memicu hook di server: checkout → `pnpm install` → `pnpm build` →
`pm2 start`. App kini jalan di `http://127.0.0.1:3000` (lokal di server).

> Catatan: kalau pertama kali pm2 start, jalankan sekali di server agar PM2
> auto-start saat reboot:
> ```bash
> pm2 startup systemd    # jalankan perintah yang dicetak
> pm2 save
> ```

---

## 4) Nginx reverse proxy (port 80 → 3000)
Di server:
```bash
sudo tee /etc/nginx/sites-available/olimversal >/dev/null <<'NGINX'
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
NGINX

sudo ln -sf /etc/nginx/sites-available/olimversal /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx
```
Kalau belum punya domain, ganti `server_name your-domain.com ...` jadi
`server_name SERVER_IP;` dan akses lewat `http://SERVER_IP`.

---

## 5) HTTPS gratis (Let's Encrypt) — butuh domain
Arahkan dulu DNS domain (A record) ke `SERVER_IP`, lalu:
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```
Certbot otomatis pasang sertifikat + redirect HTTP→HTTPS + auto-renew.

---

## 6) Update berikutnya (alur harian)
Cukup dari laptop:
```bash
git add -A
git commit -m "perubahan ..."
git push production versi1     # → server auto build & restart
# (opsional) push juga ke GitHub:
git push origin versi1
```

---

## Perintah berguna di server
```bash
pm2 status            # lihat status app
pm2 logs olimversal   # lihat log realtime
pm2 restart olimversal
sudo systemctl reload nginx
```

## Troubleshooting
- **Build OOM / "Killed"** → RAM kurang, tambah swap (langkah 1b) atau upsize droplet.
- **502 Bad Gateway** → app belum jalan di :3000. Cek `pm2 status` & `pm2 logs`.
- **pnpm: command not found di hook** → pakai path penuh, cari dengan `which pnpm`
  lalu sesuaikan `PATH` di hook, atau aktifkan corepack: `corepack enable`.
