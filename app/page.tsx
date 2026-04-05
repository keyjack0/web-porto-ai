"use client";

import { useEffect } from "react";
import Cursor from "@/components/Cursor";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import FloatingMenu from "@/components/FloatingMenu";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Prevent FOUC by ensuring theme is set before paint
    const stored = localStorage.getItem("theme") ?? "dark";
    document.documentElement.setAttribute("data-theme", stored);
  }, []);

  return (
    <>
      <Cursor />
      <Loader />
      <Navbar />
      <FloatingMenu />

      <main>
        <HeroSection />
        <MarqueeStrip />
        <WorkSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
