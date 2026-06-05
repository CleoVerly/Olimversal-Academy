# Olimversal Academy

Landing page **Olimversal Academy** — platform pelatihan olimpiade sains kelas dunia.
UI/UX bervibe _golden hour earthy_, dark cinematic, dengan animasi Framer Motion.

## Stack

- ▲ **Next.js 15** (App Router) + **React 19** + **TypeScript**
- 🎨 **Tailwind CSS v4** (CSS-first config, `@theme`, via `@tailwindcss/postcss`)
- 🔤 **next/font** — Playfair Display (serif) + Plus Jakarta Sans (sans)
- 🌀 **Framer Motion** — mask reveal, coverflow carousel, scroll progress, counter
- 🧩 **lucide-react** — ikon
- 📦 **pnpm**

## Menjalankan

```bash
pnpm install      # install dependency
pnpm dev          # dev server  → http://localhost:3000
pnpm build        # production build
pnpm start        # jalankan hasil build
```

## Struktur

```
src/
├─ app/
│  ├─ layout.tsx          # root layout + next/font + metadata
│  ├─ page.tsx            # komposisi section (Server Component)
│  └─ globals.css         # Tailwind v4 theme + design tokens
├─ data/
│  └─ content.ts          # SEMUA konten (brand, tutor, bidang, paket, testimoni)
├─ lib/
│  └─ variants.ts         # Framer Motion variants
└─ components/            # ("use client" pada yang interaktif)
   ├─ Navbar · Hero · Marquee · Stats · StoryBand · Subjects · Tutors
   ├─ Achievements · Packages · Testimonials · CTA · Footer
   └─ ui/                 # Button, Reveal, MaskText, Counter,
                          # AuroraBackground, SectionHeading, ScrollProgress
```

## Kustomisasi cepat

- **Konten** (tutor, harga, testimoni) → `src/data/content.ts`
- **Warna & font** → blok `@theme` di `src/app/globals.css`
- **Animasi** → `src/lib/variants.ts`

## Catatan

- Foto memakai sumber open-source legal: **Unsplash** (hero/story/CTA) & **Pravatar**
  (tutor/testimoni). Domainnya sudah didaftarkan di `next.config.ts` (`images.remotePatterns`)
  bila ingin beralih ke `next/image`.
