"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const run = () => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.fromTo(
        labelRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.7 }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 80 },
          { opacity: 1, y: 0, duration: 1.1 },
          "-=0.3"
        )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          statsRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          scrollRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        );
    };

    window.addEventListener("loaderDone", run);
    return () => window.removeEventListener("loaderDone", run);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingBottom: "80px",
        paddingLeft: "clamp(24px, 4vw, 48px)",
        paddingRight: "clamp(24px, 4vw, 48px)",
        paddingTop: "clamp(96px, 14vw, 128px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative vertical grid lines */}
      <div
        className="grid-line-v"
        style={{
          position: "absolute",
          top: 0,
          right: "clamp(24px, 4vw, 48px)",
          height: "100%",
          opacity: 0.25,
        }}
      />
      <div
        className="grid-line-v hidden md:block"
        style={{
          position: "absolute",
          top: 0,
          left: "33.333%",
          height: "100%",
          opacity: 0.08,
        }}
      />

      {/* Rotating side label */}
      <div
        className="hidden md:flex items-center"
        style={{
          position: "absolute",
          top: "128px",
          right: "clamp(24px, 4vw, 48px)",
          gap: "12px",
          opacity: 0.6,
        }}
      >
        <span className="float-label rotate-text">
          UI/UX DESIGNER — FRESH GRADUATE 2024
        </span>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", width: "100%" }}>
        {/* Section index */}
        <div
          ref={labelRef}
          className="flex items-center"
          style={{ gap: "12px", marginBottom: "32px", opacity: 0 }}
        >
          <div style={{ width: "24px", height: "1px", background: "var(--muted)" }} />
          <span className="float-label">001 — INTRODUCTION</span>
        </div>

        {/* Main title */}
        <h1
          ref={titleRef}
          className="font-bebas"
          style={{
            fontSize: "clamp(72px, 13vw, 200px)",
            lineHeight: "0.87",
            letterSpacing: "-0.01em",
            color: "var(--fg)",
            marginBottom: "40px",
            opacity: 0,
          }}
        >
          ARINDA
          <br />
          <span className="text-ghost">PUTRI</span>
          <br />
          RAHAYU
        </h1>

        {/* Bottom row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "32px",
            opacity: 0,
          }}
          className="md:grid-cols-2 md:items-end md:gap-16"
          ref={subRef}
        >
          {/* Description + CTA */}
          <div style={{ maxWidth: "440px" }}>
            <p
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "15px",
                lineHeight: "1.8",
                color: "var(--muted)",
                marginBottom: "28px",
              }}
            >
              Fresh graduate S1 Sistem Informasi yang berfokus pada UI/UX
              Design. Merancang pengalaman digital yang bermakna, intuitif, dan
              berdampak bagi pengguna.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href="#work" className="btn-primary">
                LIHAT KARYA
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#contact" className="btn-outline">
                HUBUNGI SAYA
              </a>
            </div>
          </div>

          {/* Stats */}
          <div
            style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}
            className="md:gap-12"
          >
            {[
              { value: "12+", label: "PROJECTS" },
              { value: "3+", label: "TOOLS" },
              { value: "3.87", label: "IPK" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="font-bebas"
                  style={{ fontSize: "52px", color: "var(--fg)", lineHeight: 1 }}
                >
                  {stat.value}
                </div>
                <div className="float-label" style={{ marginTop: "4px" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          opacity: 0,
        }}
      >
        <span className="float-label">SCROLL</span>
        <div
          className="scroll-line"
          style={{ width: "1px", height: "48px", background: "var(--muted)" }}
        />
      </div>
    </section>
  );
}
