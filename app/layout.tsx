import type { Metadata } from "next";
import { Bebas_Neue, DM_Serif_Display, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rellen Sparingga — UI/UX Designer",
  description:
    "Portfolio UI/UX Designer — Fresh Graduate S1 Sistem Informasi. Merancang pengalaman digital yang bermakna dan berdampak.",
  keywords: ["UI/UX Designer", "Portfolio", "Figma", "Sistem Informasi", "Fresh Graduate"],
  authors: [{ name: "Rellen Sparingga" }],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Rellen Sparingga — UI/UX Designer",
    description: "Portfolio UI/UX Designer fresh graduate yang berfokus pada desain pengalaman digital.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      data-theme="dark"
      className={`${bebasNeue.variable} ${dmSerifDisplay.variable} ${syne.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}