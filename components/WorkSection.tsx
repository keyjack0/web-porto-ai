"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ── Data ───────────────────────────────────────────────────────────── */
const projects = [
  {
    id: "01",
    category: "MOBILE APP",
    title: "SIAKAD Redesign — Universitas",
    description:
      "Redesign sistem informasi akademik kampus dengan pendekatan user-centered design. Task completion rate naik 67%, error rate turun 45%.",
    tags: ["FIGMA", "USER RESEARCH", "PROTOTYPING"],
  },
  {
    id: "02",
    category: "DASHBOARD",
    title: "E-Commerce Admin Panel",
    description:
      "Dashboard analytics untuk platform e-commerce lokal dengan visualisasi data real-time dan komponen yang reusable.",
    tags: ["FIGMA", "DATA VIZ"],
  },
  {
    id: "03",
    category: "BRANDING",
    title: "Startup Fintech Brand",
    description:
      "Brand identity & UI kit untuk startup fintech berfokus pada pembayaran digital.",
    tags: ["ADOBE XD", "BRANDING"],
  },
];

/* ── SVG Placeholders ───────────────────────────────────────────────── */
function SvgSiakad() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="400" fill="var(--border-color)" />
      <rect x="40" y="40" width="200" height="140" rx="12" fill="none" stroke="var(--muted)" strokeWidth="1.5" opacity="0.5" />
      <rect x="58" y="58" width="164" height="80" rx="8" fill="var(--muted)" opacity="0.1" />
      <rect x="260" y="40" width="300" height="54" rx="8" fill="none" stroke="var(--muted)" strokeWidth="1" opacity="0.4" />
      <rect x="260" y="112" width="220" height="10" rx="5" fill="var(--muted)" opacity="0.3" />
      <rect x="260" y="130" width="170" height="9" rx="4" fill="var(--muted)" opacity="0.18" />
      <rect x="40" y="205" width="520" height="1" fill="var(--muted)" opacity="0.2" />
      <circle cx="68" cy="258" r="22" fill="none" stroke="var(--muted)" strokeWidth="1.5" opacity="0.4" />
      <rect x="106" y="248" width="150" height="9" rx="4" fill="var(--muted)" opacity="0.28" />
      <rect x="106" y="265" width="108" height="7" rx="3" fill="var(--muted)" opacity="0.16" />
      <rect x="360" y="244" width="88" height="32" rx="16" fill="none" stroke="var(--fg)" strokeWidth="1.5" opacity="0.3" />
      <rect x="462" y="244" width="88" height="32" rx="16" fill="var(--fg)" opacity="0.1" />
      <text x="300" y="382" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="var(--muted)" letterSpacing="4" opacity="0.6">MOBILE APP — SIAKAD REDESIGN</text>
    </svg>
  );
}

function SvgDashboard() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="var(--border-color)" />
      <rect x="20" y="20" width="360" height="30" rx="6" fill="none" stroke="var(--muted)" strokeWidth="1" opacity="0.35" />
      <rect x="20" y="66" width="170" height="90" rx="8" fill="none" stroke="var(--muted)" strokeWidth="1" opacity="0.3" />
      <rect x="30" y="76" width="150" height="50" rx="4" fill="var(--muted)" opacity="0.1" />
      <rect x="210" y="66" width="170" height="90" rx="8" fill="none" stroke="var(--muted)" strokeWidth="1" opacity="0.3" />
      <rect x="220" y="76" width="150" height="50" rx="4" fill="var(--muted)" opacity="0.1" />
      <text x="200" y="183" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="var(--muted)" letterSpacing="3" opacity="0.6">DASHBOARD ANALYTICS</text>
    </svg>
  );
}

function SvgBrand() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="var(--border-color)" />
      <circle cx="200" cy="90" r="55" fill="none" stroke="var(--muted)" strokeWidth="1.5" opacity="0.38" />
      <circle cx="200" cy="90" r="38" fill="none" stroke="var(--muted)" strokeWidth="1" opacity="0.22" />
      <circle cx="200" cy="90" r="20" fill="var(--muted)" opacity="0.12" />
      <line x1="118" y1="90" x2="282" y2="90" stroke="var(--muted)" strokeWidth="0.5" opacity="0.2" />
      <line x1="200" y1="35" x2="200" y2="145" stroke="var(--muted)" strokeWidth="0.5" opacity="0.2" />
      <text x="200" y="172" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="var(--muted)" letterSpacing="3" opacity="0.6">BRAND IDENTITY</text>
    </svg>
  );
}

function SvgSehatku() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="300" fill="var(--border-color)" />
      <rect x="30" y="28" width="130" height="228" rx="20" fill="none" stroke="var(--muted)" strokeWidth="1.5" opacity="0.38" />
      <rect x="44" y="50" width="102" height="68" rx="8" fill="var(--muted)" opacity="0.12" />
      <rect x="44" y="130" width="78" height="8" rx="4" fill="var(--muted)" opacity="0.28" />
      <rect x="44" y="146" width="56" height="7" rx="3" fill="var(--muted)" opacity="0.16" />
      <rect x="44" y="198" width="102" height="30" rx="15" fill="var(--fg)" opacity="0.12" />
      <rect x="190" y="28" width="130" height="228" rx="20" fill="none" stroke="var(--fg)" strokeWidth="2" opacity="0.3" />
      <rect x="204" y="50" width="102" height="68" rx="8" fill="var(--muted)" opacity="0.16" />
      <rect x="204" y="130" width="78" height="8" rx="4" fill="var(--muted)" opacity="0.32" />
      <rect x="355" y="62" width="110" height="170" rx="20" fill="none" stroke="var(--muted)" strokeWidth="1" opacity="0.22" />
      <text x="250" y="287" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="var(--muted)" letterSpacing="3" opacity="0.6">MOBILE UX — HEALTH APP</text>
    </svg>
  );
}

/* ── Card Component ─────────────────────────────────────────────────── */
interface CardProps {
  project: (typeof projects)[0];
  imgHeight: number;
  children: React.ReactNode; // SVG
}

function ProjectCard({ project, imgHeight, children }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = ref.current;
    if (!card) return;

    // Scroll reveal
    gsap.fromTo(
      card,
      { opacity: 0, y: 55 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top 88%" },
      }
    );

    // 3D tilt
    const onMove = (e: MouseEvent) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(card, { rotateY: x * 5, rotateX: -y * 5, duration: 0.4, ease: "power2.out", transformPerspective: 900 });
    };
    const onLeave = () =>
      gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.8, ease: "elastic.out(1,0.5)" });

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const hoverLink = (el: HTMLElement, enter: boolean) => {
    el.style.background = enter ? "var(--fg)" : "transparent";
    el.style.color = enter ? "var(--bg)" : "var(--fg)";
  };

  return (
    <div ref={ref} className="project-card" style={{ opacity: 0 }}>
      <div className="img-placeholder" style={{ height: imgHeight }}>
        {children}
      </div>
      <div style={{ padding: "24px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "10px" }}>
          <div>
            <div className="float-label" style={{ marginBottom: "5px" }}>{project.id} — {project.category}</div>
            <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "17px", fontWeight: 700, color: "var(--fg)", lineHeight: 1.3 }}>
              {project.title}
            </h3>
          </div>
          <a href="#"
            style={{ width: "38px", height: "38px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--border-color)", color: "var(--fg)", textDecoration: "none", fontSize: "14px", flexShrink: 0, transition: "background 0.3s, color 0.3s" }}
            onMouseEnter={e => hoverLink(e.currentTarget as HTMLElement, true)}
            onMouseLeave={e => hoverLink(e.currentTarget as HTMLElement, false)}
          >↗</a>
        </div>
        <p style={{ fontSize: "13px", lineHeight: "1.75", color: "var(--muted)", marginBottom: "14px" }}>{project.description}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
    </div>
  );
}

/* ── Wide Card ──────────────────────────────────────────────────────── */
function WideCard() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.fromTo(el, { opacity: 0, y: 55 }, {
      opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 88%" },
    });
  }, []);

  return (
    <div ref={ref} className="project-card wide-card" style={{ opacity: 0 }}>
      <div className="img-placeholder" style={{ minHeight: "300px" }}>
        <SvgSehatku />
      </div>
      <div style={{ padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div className="float-label" style={{ marginBottom: "12px" }}>04 — HEALTH TECH</div>
        <h3 className="font-bebas" style={{ fontSize: "clamp(36px, 4vw, 58px)", color: "var(--fg)", lineHeight: "0.9", marginBottom: "20px", letterSpacing: "0.02em" }}>
          SEHATKU<br />MOBILE APP
        </h3>
        <p style={{ fontSize: "13px", lineHeight: "1.75", color: "var(--muted)", marginBottom: "24px" }}>
          Aplikasi kesehatan personal untuk pemantauan kondisi tubuh sehari-hari. Penelitian UX intensif 3 bulan dengan 40 responden — engagement naik 85%.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "28px" }}>
          {["FIGMA", "USER TESTING", "INFORMATION ARCH", "MOBILE FIRST"].map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <a href="#" className="float-label hover-underline" style={{ color: "var(--fg)", textDecoration: "none" }}>
          LIHAT CASE STUDY →
        </a>
      </div>
    </div>
  );
}

/* ── Section ────────────────────────────────────────────────────────── */
export default function WorkSection() {
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(headRef.current, { opacity: 0, y: 70 }, {
      opacity: 1, y: 0, duration: 1, ease: "expo.out",
      scrollTrigger: { trigger: headRef.current, start: "top 80%" },
    });
  }, []);

  return (
    <section id="work" className="section-border" style={{ padding: "96px clamp(24px, 4vw, 48px)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Heading */}
        <div ref={headRef} style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "64px", opacity: 0 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "24px", height: "1px", background: "var(--muted)" }} />
              <span className="float-label">002 — SELECTED WORK</span>
            </div>
            <h2 className="font-bebas" style={{ fontSize: "clamp(52px, 9vw, 120px)", lineHeight: "0.87", letterSpacing: "-0.02em", color: "var(--fg)" }}>
              KARYA<br /><span className="text-ghost">PILIHAN</span>
            </h2>
          </div>
          <a href="#" className="float-label hover-underline" style={{ color: "var(--muted)", textDecoration: "none" }}>SEMUA KARYA →</a>
        </div>

        {/* Row 1 */}
        <div 
          className="responsive-grid work-grid" 
          style={{ 
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "24px",
            marginBottom: "24px"
          }}
        >
          <style>{`
            @media (min-width: 768px) {
              .work-grid {
                grid-template-columns: 6fr 5fr !important;
              }
            }
          `}</style>
          <ProjectCard project={projects[0]} imgHeight={400}><SvgSiakad /></ProjectCard>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <ProjectCard project={projects[1]} imgHeight={185}><SvgDashboard /></ProjectCard>
            <ProjectCard project={projects[2]} imgHeight={185}><SvgBrand /></ProjectCard>
          </div>
        </div>

        {/* Row 2 — wide */}
        <WideCard />
      </div>
    </section>
  );
}
