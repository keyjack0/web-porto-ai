import Link from "next/link";
import Image from "next/image";
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
          <Link href="/projects" className="float-label hover-underline" style={{ textDecoration: "none", color: "var(--muted)" }}>
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
          <p className="float-label" style={{ marginBottom: "12px" }}>Preview</p>
          <div className="img-placeholder" style={{ minHeight: "280px", border: "1px solid var(--border-color)", position: "relative" }}>
            <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 980px) 100vw, 980px" style={{ objectFit: "cover",  objectPosition: "top" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.35), rgba(0,0,0,0.05) 45%, rgba(0,0,0,0))" }} />
            <p className="float-label" style={{ position: "absolute", left: "16px", bottom: "14px", margin: 0, color: "#fff" }}>
              {project.previewLabel}
            </p>
          </div>
        </section>

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
          <p className="float-label" style={{ marginBottom: "12px" }}>Demo & Source Code</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <a href={project.demoUrl ?? "#"} className="theme-btn" style={{ textDecoration: "none" }}>LIVE DEMO</a>
            <a href={project.sourceUrl ?? "#"} className="theme-btn" style={{ textDecoration: "none" }}>GITHUB REPO</a>
          </div>
        </section>

        {/* <section className="project-card" style={{ padding: "28px" }}>
          <p className="float-label" style={{ marginBottom: "12px" }}>Challenges & Solution ⭐</p>
          <p style={{ fontSize: "14px", lineHeight: 1.9, color: "var(--muted)" }}>{project.challengeSolution}</p>
        </section> */}
      </div>
    </main>
  );
}
