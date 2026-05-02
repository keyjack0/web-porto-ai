import Link from "next/link";
import { projects } from "@/lib/projects";

export default function WorksPage() {
  return (
    <main style={{ padding: "96px clamp(20px, 5vw, 56px) 64px" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ marginBottom: "44px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "18px", flexWrap: "wrap" }}>
          <div>
            <p className="float-label" style={{ marginBottom: "12px" }}>PORTFOLIO</p>
            <h1 className="font-bebas" style={{ fontSize: "clamp(44px, 10vw, 120px)", lineHeight: 0.88, letterSpacing: "-0.02em" }}>
              SEMUA KARYA
            </h1>
          </div>
          <Link href="/" className="float-label hover-underline" style={{ textDecoration: "none", color: "var(--muted)" }}>
            ← KEMBALI KE BERANDA
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {projects.map((work) => (
            <article key={work.id} className="project-card" style={{ display: "flex", flexDirection: "column" }}>
              <div className="img-placeholder" style={{ minHeight: "170px", padding: "20px", alignItems: "flex-start" }}>
                <div>
                  <p className="float-label" style={{ marginBottom: "12px" }}>
                    {work.id} — {work.category}
                  </p>
                  <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "20px", lineHeight: 1.25 }}>{work.title}</h2>
                </div>
              </div>
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "14px", flexGrow: 1 }}>
                <p style={{ fontSize: "13px", lineHeight: 1.8, color: "var(--muted)" }}>{work.description}</p>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {work.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ marginTop: "auto" }}>
                  <Link href={`/project/${work.slug}`} className="float-label hover-underline" style={{ textDecoration: "none", color: "var(--fg)" }}>
                    LIHAT DETAIL →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
