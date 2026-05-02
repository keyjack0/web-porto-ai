export interface ProjectItem {
  id: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  overview: string;
  role: string;
  techStack: string[];
  features: string[];
  previewLabel: string;
  demoUrl?: string;
  sourceUrl?: string;
  challengeSolution: string;
}

export const projects: ProjectItem[] = [
  {
    id: "01",
    slug: "siakad-redesign",
    category: "MOBILE APP",
    title: "SIAKAD Redesign — Universitas",
    description:
      "Redesign sistem informasi akademik kampus dengan pendekatan user-centered design. Task completion rate naik 67%, error rate turun 45%.",
    tags: ["FIGMA", "USER RESEARCH", "PROTOTYPING"],
    overview:
      "Project ini berfokus pada redesign sistem informasi akademik kampus agar alur KRS, cek nilai, dan jadwal kuliah lebih cepat dipahami.",
    role: "Frontend + UX (Fullstack collaboration).",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Figma"],
    features: [
      "Dashboard akademik dengan ringkasan jadwal dan pengumuman.",
      "Flow KRS yang disederhanakan dengan validasi real-time.",
      "Pencarian mata kuliah dengan filter prodi, SKS, dan semester.",
      "Riwayat nilai serta progress studi yang mudah dibaca.",
    ],
    previewLabel: "SIAKAD REDESIGN PREVIEW",
    demoUrl: "#",
    sourceUrl: "#",
    challengeSolution:
      "Navigasi lama terlalu dalam dan membingungkan pengguna baru. Solusinya adalah merancang ulang information architecture berdasarkan 3 task utama pengguna dan menguji ulang flow secara iteratif.",
  },
  {
    id: "02",
    slug: "ecommerce-admin-panel",
    category: "DASHBOARD",
    title: "E-Commerce Admin Panel",
    description:
      "Dashboard analytics untuk platform e-commerce lokal dengan visualisasi data real-time dan komponen yang reusable.",
    tags: ["FIGMA", "DATA VIZ"],
    overview:
      "Dashboard admin untuk memantau performa penjualan, stok, dan perilaku pelanggan secara real-time.",
    role: "Frontend developer.",
    techStack: ["Next.js", "TypeScript", "Charting Library", "Tailwind CSS"],
    features: [
      "KPI cards untuk revenue, order, dan conversion.",
      "Visualisasi tren penjualan harian dan bulanan.",
      "Table order dengan filter status dan rentang waktu.",
      "Komponen UI reusable untuk modul analytics.",
    ],
    previewLabel: "DASHBOARD ANALYTICS PREVIEW",
    demoUrl: "#",
    sourceUrl: "#",
    challengeSolution:
      "Data analytics yang kompleks disederhanakan dengan hierarki visual yang jelas dan komponen chart yang konsisten agar insight cepat terbaca.",
  },
  {
    id: "03",
    slug: "startup-fintech-brand",
    category: "BRANDING",
    title: "Startup Fintech Brand",
    description:
      "Brand identity & UI kit untuk startup fintech berfokus pada pembayaran digital.",
    tags: ["ADOBE XD", "BRANDING"],
    overview:
      "Pembuatan identitas visual dan UI kit untuk produk fintech agar brand terasa modern dan terpercaya.",
    role: "UI/UX designer.",
    techStack: ["Figma", "Adobe XD", "Design System"],
    features: [
      "Logo system dan brand guideline.",
      "UI kit untuk komponen utama aplikasi.",
      "Style token warna, typography, dan spacing.",
      "Template landing page dan materi promo.",
    ],
    previewLabel: "BRAND IDENTITY PREVIEW",
    demoUrl: "#",
    sourceUrl: "#",
    challengeSolution:
      "Tantangan utama adalah menyeimbangkan kesan aman dan inovatif. Solusinya memakai sistem visual modular dengan kontras kuat dan elemen trust-driven.",
  },
  {
    id: "04",
    slug: "sehatku-mobile-app",
    category: "HEALTH TECH",
    title: "Sehatku Mobile App",
    description:
      "Aplikasi kesehatan personal dengan fokus pada pengalaman pengguna mobile-first dan alur monitoring harian yang sederhana.",
    tags: ["FIGMA", "USER TESTING", "MOBILE FIRST"],
    overview:
      "Aplikasi kesehatan personal untuk pemantauan kondisi harian, aktivitas, dan catatan kesehatan pengguna.",
    role: "Fullstack collaboration (UX + frontend ownership).",
    techStack: ["Next.js", "TypeScript", "Figma", "GSAP"],
    features: [
      "Ringkasan kesehatan harian berbasis kartu.",
      "Tracking aktivitas dan kebiasaan pengguna.",
      "Pengingat rutin dan progress mingguan.",
      "Flow onboarding personal berdasarkan kebutuhan pengguna.",
    ],
    previewLabel: "HEALTH APP PREVIEW",
    demoUrl: "#",
    sourceUrl: "#",
    challengeSolution:
      "Retention pengguna rendah pada minggu pertama. Solusinya menyederhanakan onboarding dan memberikan progress cue yang lebih jelas untuk mendorong engagement.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
