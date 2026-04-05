"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { label: "UI Design & Visual Design", pct: 92 },
  { label: "UX Research & Usability Testing", pct: 85 },
  { label: "Wireframing & Prototyping", pct: 90 },
  { label: "Information Architecture", pct: 80 },
  { label: "Design System & Component Library", pct: 78 },
  { label: "HTML / CSS (Frontend Basic)", pct: 70 },
];

const tools = [
  { name: "FIGMA", role: "PRIMARY" },
  { name: "ADOBE XD", role: "DESIGN" },
  { name: "MAZE", role: "TESTING" },
  { name: "MIRO", role: "RESEARCH" },
  { name: "NOTION", role: "MANAGE" },
  { name: "CANVA", role: "VISUAL" },
];

const process = [
  { num: "01", title: "Empathize & Research", desc: "User interview, survey, competitive analysis" },
  { num: "02", title: "Define & Ideate", desc: "Problem framing, user journey map, ideation workshop" },
  { num: "03", title: "Prototype & Test", desc: "Wireframe, hi-fi design, usability testing iteratif" },
];

export default function SkillsSection() {
  const headRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);
  const barEls = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Heading reveal
    gsap.fromTo(headRef.current, { opacity: 0, y: 70 }, {
      opacity: 1, y: 0, duration: 1, ease: "expo.out",
      scrollTrigger: { trigger: headRef.current, start: "top 80%" },
    });

    // Skill bars — animate width on scroll
    ScrollTrigger.create({
      trigger: barsRef.current,
      start: "top 72%",
      onEnter: () => {
        barEls.current.forEach((bar, i) => {
          if (!bar) return;
          const w = bar.dataset.width ?? "0";
          gsap.to(bar, {
            width: w + "%",
            duration: 1.4,
            delay: i * 0.1,
            ease: "power3.out",
          });
        });
      },
    });

    // Tool cards stagger
    gsap.fromTo(".tool-card", { opacity: 0, scale: 0.88 }, {
      opacity: 1, scale: 1,
      stagger: 0.07,
      duration: 0.55,
      ease: "back.out(1.4)",
      scrollTrigger: { trigger: ".tool-card", start: "top 82%" },
    });

    // Process items
    gsap.fromTo(".process-item", { opacity: 0, x: -28 }, {
      opacity: 1, x: 0,
      stagger: 0.12,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: { trigger: ".process-item", start: "top 84%" },
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
            KEMAMPUAN
            <br />
            <span className="text-ghost">&amp; TOOLS</span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
          }}
        >
          {/* ── Left: Skill Bars ── */}
          <div>
            <div className="float-label" style={{ marginBottom: "32px" }}>
              DESIGN SKILLS
            </div>

            <div ref={barsRef} style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              {skills.map((s, i) => (
                <div key={s.label}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "8px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontSize: "13px",
                        color: "var(--fg)",
                      }}
                    >
                      {s.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains)",
                        fontSize: "11px",
                        color: "var(--muted)",
                      }}
                    >
                      {s.pct}%
                    </span>
                  </div>
                  <div style={{ width: "100%", height: "1px", background: "var(--border-color)" }}>
                    <div
                      ref={(el) => { barEls.current[i] = el; }}
                      className="skill-fill"
                      data-width={s.pct}
                      style={{ width: 0 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Tools + Process ── */}
          <div>
            {/* Tools grid */}
            <div className="float-label" style={{ marginBottom: "24px" }}>
              TOOLS
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "12px",
                marginBottom: "56px",
              }}
            >
              {tools.map((t) => (
                <div
                  key={t.name}
                  className="tool-card"
                  style={{ padding: "20px 16px", textAlign: "center", opacity: 0 }}
                >
                  <div
                    className="tool-name font-bebas"
                    style={{
                      fontSize: "20px",
                      color: "var(--fg)",
                      marginBottom: "4px",
                      letterSpacing: "0.05em",
                      transition: "color 0.3s",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="tool-label float-label"
                    style={{ transition: "color 0.3s" }}
                  >
                    {t.role}
                  </div>
                </div>
              ))}
            </div>

            {/* Design Process */}
            <div className="float-label" style={{ marginBottom: "24px" }}>
              DESIGN PROCESS
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {process.map((p, i) => (
                <div key={p.num}>
                  <div
                    className="process-item"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                      padding: "20px 0",
                      opacity: 0,
                    }}
                  >
                    <div
                      className="font-bebas"
                      style={{
                        fontSize: "48px",
                        lineHeight: 1,
                        color: "var(--border-color)",
                        minWidth: "56px",
                        transition: "color 0.5s",
                      }}
                    >
                      {p.num}
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-syne)",
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "var(--fg)",
                          marginBottom: "3px",
                        }}
                      >
                        {p.title}
                      </div>
                      <div style={{ fontSize: "12px", color: "var(--muted)", lineHeight: "1.6" }}>
                        {p.desc}
                      </div>
                    </div>
                  </div>
                  {i < process.length - 1 && (
                    <div style={{ height: "1px", background: "var(--border-color)" }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
