"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  {
    year: "2026",
    title: "S1 Sistem Informasi — Universitas Sriwijaya",
    desc: "IPK 3.87 — Tugas Akhir: Perancangan UI/UX Aplikasi Layanan Publik Berbasis Mobile.",
  },
  {
    year: "2023",
    title: "Intern UI/UX Designer — Startup Lokal",
    desc: "3 bulan. Redesign alur onboarding — konversi naik 40%. Membuat design system dari nol.",
  },
  {
    year: "2022",
    title: "UI/UX Lead — Himpunan Mahasiswa",
    desc: "Memimpin tim desain untuk website & semua publikasi digital organisasi kampus.",
  },
  {
    year: "2021",
    title: "Google UX Design Certificate",
    desc: "Professional certificate dari Google — foundation in UX research, wireframing, dan prototyping.",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Image clip reveal
    gsap.fromTo(
      imgRef.current,
      { clipPath: "inset(0 100% 0 0)" },
      {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.3,
        ease: "expo.inOut",
        scrollTrigger: { trigger: imgRef.current, start: "top 75%" },
      }
    );

    // Text content
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: { trigger: textRef.current, start: "top 75%" },
      }
    );

    // Timeline items stagger
    const items = timelineRef.current?.querySelectorAll(".tl-item");
    if (items) {
      gsap.fromTo(
        items,
        { opacity: 0, x: -24 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.15,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: timelineRef.current, start: "top 80%" },
        }
      );
    }
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-border"
      style={{ padding: "96px clamp(24px, 4vw, 48px)" }}
    >
      <div
        className="responsive-grid about-grid"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          gap: "80px",
          alignItems: "center",
        }}
      >
        {/* Left: Photo */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
            <div style={{ width: "24px", height: "1px", background: "var(--muted)" }} />
            <span className="float-label">003 — ABOUT ME</span>
          </div>

          <div style={{ position: "relative" }}>
            <div
              ref={imgRef}
              className="img-placeholder about-image"
              style={{ clipPath: "inset(0 100% 0 0)" }}
            >
              <svg width="100%" height="100%" viewBox="0 0 440 520" xmlns="http://www.w3.org/2000/svg">
                <rect width="440" height="520" fill="var(--border-color)" />
                {/* Abstract portrait */}
                <ellipse cx="220" cy="180" rx="80" ry="88" fill="none" stroke="var(--muted)" strokeWidth="1.5" opacity="0.45" />
                <ellipse cx="220" cy="175" rx="38" ry="42" fill="var(--muted)" opacity="0.12" />
                <path d="M90 520 Q80 360 220 330 Q360 360 350 520" fill="none" stroke="var(--muted)" strokeWidth="1.5" opacity="0.4" />
                {/* Decorative grid */}
                <line x1="0" y1="380" x2="440" y2="380" stroke="var(--muted)" strokeWidth="0.5" opacity="0.2" />
                <line x1="220" y1="0" x2="220" y2="520" stroke="var(--muted)" strokeWidth="0.5" opacity="0.12" />
                <rect x="20" y="20" width="400" height="480" fill="none" stroke="var(--muted)" strokeWidth="0.5" opacity="0.12" />
                <text x="220" y="496" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="var(--muted)" letterSpacing="4" opacity="0.6">DZAKY HAMID</text>
              </svg>
            </div>

            {/* Floating badge */}
            <div
              className="about-badge"
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "-20px",
                padding: "20px 24px",
                background: "var(--fg)",
                color: "var(--bg)",
              }}
            >
              <div
                className="font-bebas"
                style={{ fontSize: "36px", lineHeight: 1, color: "var(--bg)" }}
              >
                2026
              </div>
              <div
                className="float-label"
                style={{ color: "var(--bg)", opacity: 0.65, marginTop: "2px" }}
              >
                FRESH GRADUATE
              </div>
            </div>
          </div>
        </div>

        {/* Right: Text + Timeline */}
        <div ref={textRef} style={{ opacity: 0 }}>
          <h2
            className="font-bebas"
            style={{
              fontSize: "clamp(44px, 6vw, 84px)",
              lineHeight: "0.9",
              letterSpacing: "-0.01em",
              color: "var(--fg)",
              marginBottom: "28px",
            }}
          >
            MERANCANG
            <br />
            <em
              style={{
                fontFamily: "var(--font-dm-serif)",
                fontSize: "0.65em",
                color: "var(--muted)",
                fontWeight: 400,
                letterSpacing: "0.02em",
              }}
            >
              pengalaman yang
            </em>
            <br />
            BERMAKNA
          </h2>

          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.8",
              color: "var(--muted)",
              marginBottom: "16px",
            }}
          >
            Saya adalah UI/UX Designer fresh graduate dari Sistem Informasi yang
            bersemangat menciptakan produk digital yang tidak hanya indah secara
            visual, tetapi juga fungsional dan mudah digunakan.
          </p>
          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.8",
              color: "var(--muted)",
              marginBottom: "40px",
            }}
          >
            Dengan pemahaman mendalam tentang user behavior, information
            architecture, dan design systems — saya percaya desain yang baik
            dimulai dari empati terhadap pengguna.
          </p>

          {/* Timeline */}
          <div className="float-label" style={{ marginBottom: "24px" }}>
            PENDIDIKAN & PENGALAMAN
          </div>

          <div ref={timelineRef} style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {timeline.map((item, i) => (
              <div key={i}>
                <div
                  className="tl-item"
                  style={{
                    display: "flex",
                    gap: "20px",
                    padding: "20px 0",
                    opacity: 0,
                  }}
                >
                  <div className="float-label" style={{ minWidth: "44px", paddingTop: "2px" }}>
                    {item.year}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "var(--fg)",
                        marginBottom: "4px",
                      }}
                    >
                      {item.title}
                    </div>
                    <div style={{ fontSize: "12px", color: "var(--muted)", lineHeight: "1.6" }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
                {i < timeline.length - 1 && (
                  <div style={{ height: "1px", background: "var(--border-color)" }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
