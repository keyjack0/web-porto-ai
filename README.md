# Portfolio UI/UX Designer — Arinda Putri Rahayu

Website portofolio personal bergaya editorial brutalist dengan animasi GSAP, toggle siang/malam, dan desain hitam-putih yang bold.

**Catatan:** Website ini dibangun sepenuhnya menggunakan prompting AI dengan sedikit sentuhan coding manual untuk penyesuaian.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v3**
- **GSAP 3** (ScrollTrigger, animasi)
- **Google Fonts** — Bebas Neue, DM Serif Display, Syne, JetBrains Mono

## Cara Install & Jalankan

### 1. Clone / Extract project

```bash
cd portfolio-uiux
```

### 2. Install dependencies

```bash
npm install
```

### 3. Jalankan development server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### 4. Build untuk produksi

```bash
npm run build
npm start
```

## Struktur Project

```
portfolio/
├── app/
│   ├── globals.css          # CSS variables, animasi, utility classes
│   ├── layout.tsx           # Root layout + font loading
│   └── page.tsx             # Halaman utama (assembles semua section)
│
├── components/
│   ├── Cursor.tsx           # Custom cursor (dot + ring + hover effect)
│   ├── Loader.tsx           # Loading screen GSAP
│   ├── Navbar.tsx           # Navigasi + toggle Siang/Malam
│   ├── HeroSection.tsx      # Hero dengan big typography
│   ├── MarqueeStrip.tsx     # Teks berjalan otomatis (GSAP)
│   ├── WorkSection.tsx      # Grid proyek dengan card tilt 3D
│   ├── AboutSection.tsx     # About + timeline clip-path reveal
│   ├── SkillsSection.tsx    # Skill bars + tools + process
│   ├── ContactSection.tsx   # Form kontak + social links
│   └── Footer.tsx           # Footer
│
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── package.json
```

## Kustomisasi

### Ganti Nama & Info
Edit di masing-masing komponen — cari teks `"Arinda Putri Rahayu"` dan ganti dengan nama Anda.

### Ganti Foto
Di `AboutSection.tsx`, ganti SVG placeholder dengan tag `<Image>` dari Next.js:
```tsx
import Image from "next/image";
// ...
<Image src="/foto-saya.jpg" alt="Foto" fill style={{ objectFit: "cover" }} />
```
Letakkan foto di folder `public/`.

### Ganti Proyek
Edit array `projects` di `WorkSection.tsx`, ganti SVG placeholder dengan screenshot desain Anda.

### Warna
Semua warna dikontrol via CSS variables di `globals.css`:
```css
:root {
  --bg: #ffffff;      /* background siang */
  --fg: #0a0a0a;      /* teks utama siang */
}
[data-theme="dark"] {
  --bg: #0a0a0a;      /* background malam */
  --fg: #f5f5f0;      /* teks utama malam */
}
```

## Deploy ke Vercel

```bash
npx vercel
```
Atau push ke GitHub dan connect ke [vercel.com](https://vercel.com).

---

Made with ♥ — UI/UX Portfolio 2026
