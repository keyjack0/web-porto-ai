export interface ProjectItem {
  id: string;
  slug: string;
  category: string;
  title: string;
  image: string;
  imageAlt: string;
  // image2: string;
  // image2Alt: string;
  description: string;
  tags: string[];
  overview: string[];
  role: string;
  techStack: string[];
  features: string[];
  previewLabel: string;
  demoUrl?: string;
  sourceUrl?: string;
}

export const projects: ProjectItem[] = [
  {
    id: "01",
    slug: "caritukang-app",
    category: "WEB APP",
    title: "Caritukang — Platform Jasa Tukang",
    image: "/pengguna-caritukang.png",
    imageAlt: "Preview aplikasi Caritukang",
    description:
      "Platform pencarian dan pemesanan jasa tukang berbasis web yang memudahkan pengguna menemukan layanan dengan cepat dan efisien.",
    tags: ["PHP", "CODEIGNITER 3", "MYSQL", "BOOTSTRAP 5"],
    overview: [
      "Project ini berfokus pada pengembangan aplikasi web untuk membantu pengguna mencari, memilih, dan memesan jasa tukang berdasarkan kategori layanan dengan alur yang sederhana."
    ],
    role: "Fullstack Developer.",
    techStack: ["PHP 8", "CodeIgniter 3", "JavaScript", "Bootstrap 5", "MySQL"],
    features: [
      "Pencarian tukang berdasarkan kategori layanan.",
      "Halaman detail tukang dengan informasi layanan dan harga.",
      "Sistem pemesanan jasa langsung melalui platform.",
      "Manajemen data tukang dan layanan melalui dashboard admin.",
      "Tampilan responsif menggunakan Bootstrap 5.",
    ],
    previewLabel: "CARITUKANG PREVIEW",
    demoUrl: "https://caritukang.wuaze.com",
    sourceUrl: "https://github.com/keyjack0/caritukang-new",
  },
  {
    id: "02",
    slug: "nazmalogy-company-profile",
    category: "WEB DEVELOPMENT",
    title: "Nazmalogy Company Profile",
    image: "/nazmalogy.png",
    imageAlt: "Preview landing page Nazmalogy",
    description:
      "Website profil perusahaan resmi PT Nazmalogy Loka Lestari untuk memperkuat branding digital dan menampilkan portofolio layanan R&D.",
    tags: ["LARAVEL", "TAILWIND CSS", "UI/UX"],
    overview: [
      "Berkontribusi dengan tim dalam merancang dan mengimplementasikan fitur komentar serta notifikasi menggunakan Laravel dan Tailwind CSS. ",
      "Berkolaborasi dalam proses analisis kebutuhan dan perancangan database untuk mendukung fungsionalitas sistem pada website Nazmalogy. ",
      "Mengoptimalkan antarmuka yang responsif dan user-friendly guna meningkatkan pengalaman pengguna pada platform publisher. ",
      "Melakukan pengujian sistem secara berkala untuk memastikan stabilitas fitur yang dikembangkan."
    ],
    role: "Fullstack Developer (Intern).",
    techStack: ["PHP 8.2", "Laravel 12", "Tailwind CSS", "MySQL", "Node.js"],
    features: [
      "Landing page interaktif dengan desain modern dan responsif.",
      "Integrasi komponen UI dinamis menggunakan Tailwind CSS.",
      "Optimasi SEO-friendly untuk meningkatkan visibilitas perusahaan.",
      "Sistem manajemen konten sederhana untuk update layanan dan berita.",
    ],
    previewLabel: "LIVE COMPANY PROFILE",
    demoUrl: "https://nazmalogy.com/",
    sourceUrl: "#",
  },
  {
    id: "03",
    slug: "linkme-biolink-platform",
    category: "SaaS Web App",
    title: "LinkMe - Personalized Bio Link",
    image: "/linkme.png", 
    imageAlt: "Preview platform LinkMe bio link",
    description:
      "Platform personal branding sederhana untuk mengelola dan membagikan berbagai tautan media sosial dalam satu halaman profil yang kustomisasinya mudah.",
    tags: ["NEXT.JS", "TAILWIND CSS", "GSAP", "SUPABASE", "Vercel"],
    overview: [
      "Membangun antarmuka pengguna yang minimalis dan responsif untuk platform manajemen tautan personal. ",
      "Mengimplementasikan integrasi tautan media sosial yang dinamis agar memudahkan audiens mengakses berbagai platform dalam satu tempat. ",
      "Melakukan optimasi performa frontend untuk memastikan waktu pemuatan halaman yang sangat cepat bagi pengunjung profil. ",
      "Merancang sistem tema yang bersih dengan fokus pada keterbacaan dan navigasi yang intuitif."
    ],
    role: "Frontend Developer (Personal Project).",
    techStack: ["Next.js", "React", "Tailwind CSS", "JavaScript", "Vercel"],
    features: [
      "Halaman profil kustom dengan integrasi berbagai ikon media sosial.",
      "Tata letak responsif yang dioptimalkan untuk perangkat seluler dan desktop.",
      "Navigasi satu klik menuju platform eksternal.",
      "UI minimalis dengan desain yang modern dan ringan."
    ],
    previewLabel: "LIVE DEMO PREVIEW",
    demoUrl: "https://link-me-tau.vercel.app/", // Berdasarkan informasi umum project serupa
    sourceUrl: "https://github.com/keyjack0/LinkMe",
},
  {
    id: "04",
    slug: "sehatku-mobile-app",
    category: "HEALTH TECH",
    title: "Sehatku Mobile App",
    image: "/profile.jpeg",
    imageAlt: "Preview Sehatku mobile app",
    description:
      "Aplikasi kesehatan personal dengan fokus pada pengalaman pengguna mobile-first dan alur monitoring harian yang sederhana.",
    tags: ["FIGMA", "USER TESTING", "MOBILE FIRST"],
    overview : [
      "Aplikasi kesehatan personal untuk pemantauan kondisi harian, aktivitas, dan catatan kesehatan pengguna.",
    ],
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
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
