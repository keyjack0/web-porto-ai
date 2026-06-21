import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dzaky Hamid — Fullstack Developer",
  description:
    "Portfolio Fullstack Developer — Fresh Graduate S1 Sistem Informasi. Merancang pengalaman digital yang bermakna dan berdampak.",
  keywords: ["Fullstack Developer", "Portfolio", "Codeigniter", "Laravel", "Next.js", "Fresh Graduate"],
  authors: [{ name: "Dzaky Hamid" }],
  icons: { icon: "/D..png" },
  openGraph: {
    title: "Dzaky Hamid — Fullstack Developer",
    description: "Portfolio fullstack developer yang berfokus pada desain pengalaman digital.",
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
      className={`${poppins.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}