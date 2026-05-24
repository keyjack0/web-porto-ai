"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const codeCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const run = () => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.fromTo(labelRef.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.7 })
        .fromTo(titleRef.current, { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 1.1 }, "-=0.3")
        .fromTo(subRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
        .fromTo(
          codeCardRef.current,
          { opacity: 0, x: 60, rotateY: -10 },
          { opacity: 1, x: 0, rotateY: 0, duration: 1.0, ease: "expo.out" },
          "-=0.8"
        )
        .fromTo(scrollRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3");
    };

    window.addEventListener("loaderDone", run);
    return () => window.removeEventListener("loaderDone", run);
  }, []);

  const codeLines = [
    { num: "01", parts: [{ t: "kw", v: "const" }, { t: "sp" }, { t: "va", v: "coder" }, { t: "sp" }, { t: "op", v: "=" }, { t: "sp" }, { t: "wh", v: "{" }] },
    { num: "02", parts: [{ t: "ind" }, { t: "va", v: "name" }, { t: "op", v: ":" }, { t: "sp" }, { t: "st", v: "'Dzaky Hamid Al Aziz'" }, { t: "wh", v: "," }] },
    { num: "03", parts: [{ t: "ind" }, { t: "va", v: "focus" }, { t: "op", v: ":" }, { t: "sp" }, { t: "st", v: "'fullstack developer'" }, { t: "wh", v: "," }] },
    { num: "04", parts: [{ t: "ind" }, { t: "va", v: "tools" }, { t: "op", v: ":" }, { t: "sp" }, { t: "wh", v: "[" }, { t: "st", v: "'Codeigniter'" }, { t: "wh", v: ", " }, { t: "st", v: "'Laravel'" }, { t: "wh", v: ", " }, { t: "st", v: "'Next.js'" }, { t: "wh", v: "]," }] },
    { num: "05", parts: [{ t: "ind" }, { t: "va", v: "passionate" }, { t: "op", v: ":" }, { t: "sp" }, { t: "bo", v: "true" }, { t: "wh", v: "," }] },
    { num: "06", parts: [{ t: "ind" }, { t: "va", v: "motto" }, { t: "op", v: ":" }, { t: "sp" }, { t: "st", v: '"Build with Passion"' }] },
    { num: "07", parts: [{ t: "wh", v: "};" }] },
    { num: "08", parts: [{ t: "va", v: "coder" }, { t: "op", v: "." }, { t: "va", v: "show" }, { t: "wh", v: "();" }] },
  ];

  const colorMap: Record<string, string> = {
    kw: "#c792ea",
    va: "#82aaff",
    op: "#89ddff",
    st: "#c3e88d",
    bo: "#f78c6c",
    wh: "#e0e0e0",
    sp: "#e0e0e0",
    ind: "#e0e0e0",
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingBottom: "80px",
        paddingLeft: "clamp(24px, 4vw, 48px)",
        paddingRight: "clamp(24px, 4vw, 48px)",
        paddingTop: "clamp(96px, 14vw, 128px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", width: "100%" }}>
        {/* Label */}
        <div ref={labelRef} className="flex items-center" style={{ gap: "12px", marginBottom: "20px", opacity: 0 }}>
          {/* <div style={{ width: "24px", height: "1px", background: "var(--muted)" }} /> */}
          {/* <span className="float-label">001 — INTRODUCTION</span> */}
        </div>

        {/* Title + Code Card row */}
        {/* PERBAIKAN: hapus gridTemplateColumns dari inline style, serahkan ke Tailwind */}
        <div
          ref={titleRef}
          className="grid grid-cols-1 md:grid-cols-[1fr_auto] md:items-center"
          style={{
            gap: "40px",
            marginBottom: "20px",
            opacity: 0,
          }}
        >
          {/* Title */}
          <h1
            className="font-bebas"
            style={{
              fontSize: "clamp(72px, 13vw, 200px)",
              lineHeight: "0.87",
              letterSpacing: "-0.01em",
              color: "var(--fg)",
              margin: 0,
            }}
          >
            DZAKY
            <span className="text-ghost"> HAMID</span>
          </h1>

          {/* Code Card */}
          {/* PERBAIKAN: hapus width dari inline style, serahkan ke Tailwind */}
          <div
            ref={codeCardRef}
            className="w-full md:w-[520px]"
            style={{
              opacity: 0,
              background: "#111111",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "10px",
              overflow: "hidden",
              flexShrink: 0,
              boxShadow: "0 32px 64px rgba(0,0,0,0.5)",
            }}
          >
            {/* Title bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 16px",
                background: "#0d0d0d",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div style={{ display: "flex", gap: "6px" }}>
                {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                  <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "11px",
                  color: "#fff",
                  background: "rgba(224, 224, 224, 0.13)",
                  padding: "3px 10px",
                  borderRadius: "50px",
                }}
              >
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#ffffff" }} />
                Portfolio.ts
              </div>
            </div>

            {/* Code body */}
            <div style={{ padding: "20px 18px" }}>
              {codeLines.map((line) => (
                <div key={line.num} style={{ display: "flex", gap: "14px", marginBottom: "5px" }}>
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: "11px",
                      color: "#565656",
                      minWidth: "16px",
                      textAlign: "right",
                      userSelect: "none",
                    }}
                  >
                    {line.num}
                  </span>
                  <span style={{ fontFamily: "monospace", fontSize: "12px", lineHeight: "1.6" }}>
                    {line.parts.map((p, i) =>
                      p.t === "ind" ? (
                        <span key={i}>&nbsp;&nbsp;</span>
                      ) : p.t === "sp" ? (
                        <span key={i}>&nbsp;</span>
                      ) : (
                        <span key={i} style={{ color: colorMap[p.t] ?? "#e0e0e0" }}>
                          {p.v}
                        </span>
                      )
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Description + CTA */}
        <div ref={subRef} style={{ opacity: 0, maxWidth: "440px" }}>
          <p
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "15px",
              lineHeight: "1.8",
              color: "var(--muted)",
              marginBottom: "28px",
            }}
          >
            junior web fullstack developer yang memiliki passion untuk menciptakan digitalsisasi yang berdampak positif bagi masyarakat
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="#project" className="btn-primary">
              LIHAT KARYA
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#contact" className="btn-outline">HUBUNGI SAYA</a>
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
        <div className="scroll-line" style={{ width: "1px", height: "48px", background: "var(--muted)" }} />
      </div>
    </section>
  );
}