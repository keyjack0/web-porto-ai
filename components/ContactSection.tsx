"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const socials = [
  { label: "EMAIL", value: "rellen.sparingga@email.com", href: "mailto:rellen.sparingga@email.com" },
  { label: "LINKEDIN", value: "linkedin.com/in/rellensparingga", href: "https://linkedin.com" },
  { label: "BEHANCE", value: "behance.net/rellensparingga", href: "https://behance.net" },
  { label: "DRIBBBLE", value: "dribbble.com/rellensparingga", href: "https://dribbble.com" },
];

export default function ContactSection() {
  const headRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    gsap.fromTo(headRef.current, { opacity: 0, x: -60 }, {
      opacity: 1, x: 0, duration: 1.1, ease: "expo.out",
      scrollTrigger: { trigger: headRef.current, start: "top 80%" },
    });
    gsap.fromTo(leftRef.current, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
      scrollTrigger: { trigger: leftRef.current, start: "top 80%" },
    });
    gsap.fromTo(rightRef.current, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.9, delay: 0.15, ease: "power3.out",
      scrollTrigger: { trigger: rightRef.current, start: "top 80%" },
    });
  }, []);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    gsap.to(e.currentTarget, { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 });
    setTimeout(() => setSent(true), 200);
  };

  return (
    <section
      id="contact"
      className="section-border"
      style={{ padding: "96px clamp(24px, 4vw, 48px)", overflow: "hidden" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
          <div style={{ width: "24px", height: "1px", background: "var(--muted)" }} />
          <span className="float-label">005 — CONTACT</span>
        </div>

        {/* Big heading */}
        <div ref={headRef} style={{ marginBottom: "72px", opacity: 0 }}>
          <h2
            className="font-bebas"
            style={{
              fontSize: "clamp(60px, 12vw, 160px)",
              lineHeight: "0.87",
              letterSpacing: "-0.02em",
              color: "var(--fg)",
            }}
          >
            MARI
            <br />
            <span className="text-ghost">BERKOLABORASI</span>
          </h2>
        </div>

        {/* Two columns */}
        <div className="responsive-grid contact-grid" style={{ gap: "80px" }}>

          {/* Left: info */}
          <div ref={leftRef} style={{ opacity: 0 }}>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.8",
                color: "var(--muted)",
                marginBottom: "48px",
                maxWidth: "380px",
              }}
            >
              Saya terbuka untuk peluang kerja full-time, freelance, maupun
              kolaborasi proyek. Mari wujudkan ide Anda menjadi produk digital
              yang luar biasa.
            </p>

            {/* Social links */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    textDecoration: "none",
                  }}
                >
                  <div className="float-label" style={{ minWidth: "72px" }}>
                    {s.label}
                  </div>
                  <span
                    className="hover-underline"
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontSize: "14px",
                      color: "var(--fg)",
                    }}
                  >
                    {s.value}
                  </span>
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "48px",
                padding: "12px 20px",
                border: "1px solid var(--border-color)",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "var(--fg)",
                  animation: "pulse 2s infinite",
                }}
              />
              <span className="float-label">TERSEDIA UNTUK HIRE</span>
            </div>
          </div>

          {/* Right: form */}
          <div ref={rightRef} style={{ opacity: 0 }}>
            <div className="float-label" style={{ marginBottom: "32px" }}>
              KIRIM PESAN
            </div>

            {sent ? (
              <div
                style={{
                  padding: "48px 40px",
                  border: "1px solid var(--border-color)",
                  textAlign: "center",
                }}
              >
                <div
                  className="font-bebas"
                  style={{ fontSize: "48px", color: "var(--fg)", marginBottom: "12px" }}
                >
                  TERIMA KASIH!
                </div>
                <p style={{ fontSize: "14px", color: "var(--muted)" }}>
                  Pesan Anda sudah diterima. Saya akan segera menghubungi Anda.
                </p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                {/* Name */}
                <div>
                  <label className="float-label" style={{ display: "block", marginBottom: "8px" }}>
                    NAMA
                  </label>
                  <input
                    type="text"
                    placeholder="Nama lengkap Anda"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="float-label" style={{ display: "block", marginBottom: "8px" }}>
                    EMAIL
                  </label>
                  <input
                    type="email"
                    placeholder="email@anda.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="form-input"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="float-label" style={{ display: "block", marginBottom: "8px" }}>
                    PESAN
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Ceritakan tentang proyek Anda..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="form-input"
                    style={{ resize: "none" }}
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  className="btn-primary"
                  style={{ alignSelf: "flex-start", marginTop: "8px" }}
                >
                  KIRIM PESAN
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }
      `}</style>
    </section>
  );
}
