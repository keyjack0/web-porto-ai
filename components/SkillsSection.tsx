"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tools = [
  { name: "VS CODE", role: "CODE EDITOR" },
  { name: "WINDOWS / LINUX FEDORA", role: "SISTEM OPERASI" },
  { name: "XAMPP", role: "LOCAL SERVER" },
  { name: "VERCEL, INFINITY FREE", role: "HOSTING" },
  { name: "SUPABASE", role: "CLOUD BACKEND" },
  { name: "MIDTRANS", role: "PAYMENT GATEWAY" },
  { name: "FIGMA", role: "DESIGN" },
];

export default function SkillsSection() {
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Heading reveal
    gsap.fromTo(headRef.current, { opacity: 0, y: 70 }, {
      opacity: 1, y: 0, duration: 1, ease: "expo.out",
      scrollTrigger: { trigger: headRef.current, start: "top 80%" },
    });

    // Tool cards stagger
    gsap.fromTo(".tool-card", { opacity: 0, scale: 0.88 }, {
      opacity: 1, scale: 1,
      stagger: 0.07,
      duration: 0.55,
      ease: "back.out(1.4)",
      scrollTrigger: { trigger: ".tool-card", start: "top 82%" },
    });
  }, []);

  return (
    <section
      id="skills"
      className="section-border"
      style={{ padding: "96px clamp(24px, 4vw, 48px)" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Heading */}
        <div ref={headRef} style={{ marginBottom: "72px", opacity: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={{ width: "24px", height: "1px", background: "var(--muted)" }} />
            <span className="float-label">004 — EXPERTISE</span>
          </div>
          <h2
            className="font-bebas"
            style={{
              fontSize: "clamp(52px, 9vw, 120px)",
              lineHeight: "0.87",
              letterSpacing: "-0.02em",
              color: "var(--fg)",
            }}
          >
            ENVIROMENT
            <br />
            <span className="text-ghost"> SAYA</span>
          </h2>
        </div>

        {/* Tools Section */}
        <div>
          <div className="float-label" style={{ marginBottom: "clamp(16px, 3vw, 24px)" }}>
            TOOLS
          </div>
          <div
            className="tools-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(clamp(140px, 100%, 200px), 1fr))",
              gap: "clamp(12px, 2vw, 24px)",
              width: "100%",
            }}
          >
            {tools.map((t) => (
              <div
                key={t.name}
                className="tool-card"
                style={{
                  padding: "clamp(16px, 2vw, 24px)",
                  textAlign: "center",
                  opacity: 0,
                  border: "1px solid var(--border-color)",
                  borderRadius: "4px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  className="tool-name font-bebas"
                  style={{
                    fontSize: "clamp(14px, 2vw, 18px)",
                    color: "var(--fg)",
                    marginBottom: "clamp(4px, 1vw, 8px)",
                    letterSpacing: "0.05em",
                    wordBreak: "break-word",
                  }}
                >
                  {t.name}
                </div>
                <div
                  className="tool-label float-label"
                  style={{
                    fontSize: "clamp(10px, 1.5vw, 13px)",
                    whiteSpace: "normal",
                  }}
                >
                  {t.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
