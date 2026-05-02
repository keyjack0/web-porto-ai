import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/projects";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main style={{ padding: "96px clamp(20px, 5vw, 56px) 64px" }}>
      <div style={{ maxWidth: "980px", margin: "0 auto" }}>
        <div style={{ marginBottom: "40px" }}>
          <Link href="/works" className="float-label hover-underline" style={{ textDecoration: "none", color: "var(--muted)" }}>
            ← KEMBALI KE SEMUA KARYA
          </Link>
          <h1
            className="font-bebas"
            style={{ fontSize: "clamp(44px, 10vw, 110px)", lineHeight: "0.9", marginTop: "18px", letterSpacing: "-0.02em" }}
          >
            {project.title}
          </h1>
          <p style={{ fontSize: "14px", color: "var(--muted)", marginTop: "10px", lineHeight: 1.8 }}>
            {project.category}
          </p>
        </div>

        <section className="project-card" style={{ padding: "28px", marginBottom: "18px" }}>
          <p className="float-label" style={{ marginBottom: "12px" }}>Overview</p>
          <p style={{ fontSize: "14px", lineHeight: 1.9, color: "var(--muted)" }}>{project.overview}</p>
        </section>

        <section className="project-card" style={{ padding: "28px", marginBottom: "18px" }}>
          <p className="float-label" style={{ marginBottom: "12px" }}>Role</p>
          <p style={{ fontSize: "14px", lineHeight: 1.9, color: "var(--muted)" }}>{project.role}</p>
        </section>

        <section className="project-card" style={{ padding: "28px", marginBottom: "18px" }}>
          <p className="float-label" style={{ marginBottom: "12px" }}>Tech Stack</p>
          <p style={{ fontSize: "14px", lineHeight: 1.9, color: "var(--muted)" }}>{project.techStack.join(", ")}.</p>
        </section>

        <section className="project-card" style={{ padding: "28px", marginBottom: "18px" }}>
          <p className="float-label" style={{ marginBottom: "12px" }}>Features</p>
          <ul style={{ paddingLeft: "18px", color: "var(--muted)", fontSize: "14px", lineHeight: 1.9 }}>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="project-card" style={{ padding: "28px", marginBottom: "18px" }}>
          <p className="float-label" style={{ marginBottom: "12px" }}>Preview</p>
          <div className="img-placeholder" style={{ minHeight: "280px", border: "1px solid var(--border-color)" }}>
            <svg width="100%" height="100%" viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg">
              <rect width="720" height="360" fill="var(--border-color)" />
              <rect x="24" y="24" width="132" height="312" rx="14" fill="none" stroke="var(--muted)" opacity="0.45" />
              <rect x="174" y="24" width="522" height="64" rx="12" fill="none" stroke="var(--muted)" opacity="0.35" />
              <rect x="174" y="104" width="252" height="102" rx="12" fill="var(--muted)" opacity="0.1" />
              <rect x="444" y="104" width="252" height="102" rx="12" fill="var(--muted)" opacity="0.14" />
              <rect x="174" y="222" width="522" height="114" rx="12" fill="none" stroke="var(--muted)" opacity="0.32" />
              <text x="360" y="344" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="var(--muted)" letterSpacing="3">
                {project.previewLabel}
              </text>
            </svg>
          </div>
        </section>

        <section className="project-card" style={{ padding: "28px", marginBottom: "18px" }}>
          <p className="float-label" style={{ marginBottom: "12px" }}>Demo & Source Code</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <a href={project.demoUrl ?? "#"} className="theme-btn" style={{ textDecoration: "none" }}>LIVE DEMO</a>
            <a href={project.sourceUrl ?? "#"} className="theme-btn" style={{ textDecoration: "none" }}>GITHUB REPO</a>
          </div>
        </section>

        <section className="project-card" style={{ padding: "28px" }}>
          <p className="float-label" style={{ marginBottom: "12px" }}>Challenges & Solution ⭐</p>
          <p style={{ fontSize: "14px", lineHeight: 1.9, color: "var(--muted)" }}>{project.challengeSolution}</p>
        </section>
      </div>
    </main>
  );
}
