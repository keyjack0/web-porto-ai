"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { projects } from "@/lib/projects";

gsap.registerPlugin(ScrollTrigger);

function ProjectVisual({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.35), rgba(0,0,0,0.05) 45%, rgba(0,0,0,0))",
        }}
      />
      <p
        className="float-label"
        style={{ position: "absolute", left: "14px", bottom: "12px", margin: 0, color: "#fff", letterSpacing: "0.08em" }}
      >
        {label}
      </p>
    </div>
  );
}

/* ── Card Component ─────────────────────────────────────────────────── */
interface CardProps {
  project: (typeof projects)[0];
  imgHeight: number;
}

function ProjectCard({ project, imgHeight }: CardProps) {
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
        <ProjectVisual src={project.image} alt={project.imageAlt} label={project.previewLabel} />
      </div>
      <div style={{ padding: "24px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "10px" }}>
          <div>
            <div className="float-label" style={{ marginBottom: "5px" }}>{project.id} — {project.category}</div>
            <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "17px", fontWeight: 700, color: "var(--fg)", lineHeight: 1.3 }}>
              {project.title}
            </h3>
          </div>
          <Link href={`/project/${project.slug}`}
            style={{ width: "38px", height: "38px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--border-color)", color: "var(--fg)", textDecoration: "none", fontSize: "14px", flexShrink: 0, transition: "background 0.3s, color 0.3s" }}
            onMouseEnter={e => hoverLink(e.currentTarget as HTMLElement, true)}
            onMouseLeave={e => hoverLink(e.currentTarget as HTMLElement, false)}
          >↗</Link>
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
  const project = projects[3];
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
        <ProjectVisual src={project.image} alt={project.imageAlt} label={project.previewLabel} />
      </div>
      <div style={{ padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div className="float-label" style={{ marginBottom: "12px" }}>{project.id} — {project.category}</div>
        <h3 className="font-bebas" style={{ fontSize: "clamp(36px, 4vw, 58px)", color: "var(--fg)", lineHeight: "0.9", marginBottom: "20px", letterSpacing: "0.02em" }}>
          {project.title.split(" ").slice(0, 2).join(" ")}<br />{project.title.split(" ").slice(2).join(" ")}
        </h3>
        <p style={{ fontSize: "13px", lineHeight: "1.75", color: "var(--muted)", marginBottom: "24px" }}>
          {project.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "28px" }}>
          {project.tags.map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <Link href={`/project/${project.slug}`} className="float-label hover-underline" style={{ color: "var(--fg)", textDecoration: "none" }}>
          LIHAT CASE STUDY →
        </Link>
      </div>
    </div>
  );
}

/* ── Section ────────────────────────────────────────────────────────── */
export default function ProjectSection() {
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(headRef.current, { opacity: 0, y: 70 }, {
      opacity: 1, y: 0, duration: 1, ease: "expo.out",
      scrollTrigger: { trigger: headRef.current, start: "top 80%" },
    });
  }, []);

  return (
    <section id="project" className="section-border" style={{ padding: "96px clamp(24px, 4vw, 48px)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Heading */}
        <div ref={headRef} style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "64px", opacity: 0 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "24px", height: "1px", background: "var(--muted)" }} />
              <span className="float-label">002 — SELECTED PROJECT</span>
            </div>
            <h2 className="font-bebas" style={{ fontSize: "clamp(52px, 9vw, 120px)", lineHeight: "0.87", letterSpacing: "-0.02em", color: "var(--fg)" }}>
              KARYA<br /><span className="text-ghost">PILIHAN</span>
            </h2>
          </div>
          <Link href="/projects" className="float-label hover-underline" style={{ color: "var(--muted)", textDecoration: "none" }}>SEMUA KARYA →</Link>
        </div>

        {/* Row 1 */}
        <div 
          className="responsive-grid project-grid" 
          style={{ 
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "24px",
            marginBottom: "24px"
          }}
        >
          <style>{`
            @media (min-width: 768px) {
              .project-grid {
                grid-template-columns: 6fr 5fr !important;
              }
            }
          `}</style>
          <ProjectCard project={projects[0]} imgHeight={400} />
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <ProjectCard project={projects[1]} imgHeight={185} />
            <ProjectCard project={projects[2]} imgHeight={185} />
          </div>
        </div>

        {/* Row 2 — wide */}
        <WideCard />
      </div>
    </section>
  );
}
