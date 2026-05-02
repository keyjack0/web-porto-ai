"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  {
    year: "2022 - 2026",
    title: "S1 Sistem Informasi — Universitas AMIKOM Yogyakarta",
    desc: "IPK 3.83"
  },
  {
    year: "2025",
    title: "Intern fullstack web developer — PT. Nazmalogy Loka Lastari",
    desc: "3 bulan. berkolaborasi dalam tim untuk melakukan redesain dan implementasi fitur pada website internal menggunakan laravel.",
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
              className="img-placeholder about-image image-wrapper"
              style={{ clipPath: "inset(0 100% 0 0)" }}
            >
              <Image
                src="/profile.jpeg"
                alt="Profile"
                width={440}
                height={520}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                className="profile-image"
              />
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
            Saya adalah Junior Fullstack Web Developer fresh graduate dari Sistem Informasi yang berfokus pada pengembangan aplikasi web yang fungsional, efisien, dan mudah digunakan.
          </p>

          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.8",
              color: "var(--muted)",
              marginBottom: "40px",
            }}
          >
            Memiliki beberapa pengalaman dalam membangun aplikasi menggunakan teknologi seperti Next.js, Laravel, dan codeigniter, serta memahami alur sistem mulai dari frontend hingga backend — saya terus belajar untuk mengembangkan solusi digital yang optimal dan scalable.
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
