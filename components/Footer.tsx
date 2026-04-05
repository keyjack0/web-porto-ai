"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current?.querySelectorAll(".foot-item") ?? [],
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 95%" },
      }
    );
  }, []);

  const year = new Date().getFullYear();

  return (
    <footer
      ref={ref}
      className="section-border"
      style={{ padding: "32px clamp(24px, 4vw, 48px)" }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <a
            href="#"
            className="foot-item font-bebas hover-underline"
            style={{
              fontSize: "22px",
              letterSpacing: "0.12em",
              color: "var(--fg)",
              textDecoration: "none",
              opacity: 0,
            }}
          >
            ARINDA.DEV
          </a>

          {/* Quick nav */}
          <nav
            className="foot-item"
            style={{
              display: "flex",
              gap: "28px",
              opacity: 0,
            }}
          >
            {["WORK", "ABOUT", "SKILLS", "CONTACT"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link hover-underline"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Back to top */}
          <button
            className="foot-item theme-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ opacity: 0 }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
            BACK TO TOP
          </button>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "var(--border-color)" }} />

        {/* Bottom row */}
        <div
          className="foot-item"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
            opacity: 0,
          }}
        >
          <div className="float-label">
            © {year} — ARINDA PUTRI RAHAYU
          </div>
          <div className="float-label" style={{ textAlign: "center" }}>
            UI/UX DESIGNER — FRESH GRADUATE S1 SISTEM INFORMASI
          </div>
          <div className="float-label">PALEMBANG, INDONESIA</div>
        </div>
      </div>
    </footer>
  );
}
