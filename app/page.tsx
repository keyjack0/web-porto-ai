"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
// import Cursor from "@/components/Cursor";
import LinePattern from "@/components/LinePattern";
// import Loader from "@/components/Loader";

// Dynamically import components that use GSAP
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const FloatingMenu = dynamic(() => import("@/components/FloatingMenu"), { ssr: false });
const HeroSection = dynamic(() => import("@/components/HeroSection"), { ssr: false });
const MarqueeStrip = dynamic(() => import("@/components/MarqueeStrip"), { ssr: false });
const ProjectSection = dynamic(() => import("@/components/ProjectSection"), { ssr: false });
const AboutSection = dynamic(() => import("@/components/AboutSection"), { ssr: false });
const SkillsSection = dynamic(() => import("@/components/SkillsSection"), { ssr: false }); 
const ContactSection = dynamic(() => import("@/components/ContactSection"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  useEffect(() => {
    // Prevent FOUC by ensuring theme is set before paint
    const stored = localStorage.getItem("theme") ?? "dark";
    document.documentElement.setAttribute("data-theme", stored);
  }, []);

  return (
    <>
      {/* <Cursor /> */}
      <LinePattern />
      {/* <Loader /> */}
      <Navbar />
      <FloatingMenu />

      <main>
        <HeroSection />
        <MarqueeStrip />
        <ProjectSection />
        <AboutSection />
        {/* <SkillsSection /> */} {/* aktifkan jika ingin menampilkan bagian skills, pastikan juga untuk mengaktifkan bagian import dan refs yang di tandai --- IGNORE --- pada file components/SkillsSection.tsx */}
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}