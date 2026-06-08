// PM2 process config — dipakai di server DigitalOcean (Droplet)
// jalankan: pm2 start ecosystem.config.cjs
module.exports = {
  apps: [
    {
      name: "olimversal",
      cwd: "/var/www/olimversal",
      // jalankan binary Next langsung (lebih robust di PM2 daripada lewat pnpm)
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      max_memory_restart: "450M",
      env: {
        NODE_ENV: "production",
        PORT: "3000",
      },
    },
  ],
};
