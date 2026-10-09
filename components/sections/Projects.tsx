import { ArrowUpRight, Github, Plus } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ALL_PROJECTS, type Project } from "@/lib/portfolio-data";

function ProjectCard({ project, index, featured }: { project: Project; index: number; featured: boolean }) {
  return (
    <article
      className={`card group flex h-full flex-col p-7 md:p-9 hover:-translate-y-0.5 ${
        featured ? "md:col-span-2 lg:col-span-1" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
          {project.context ?? `${project.category} · ${project.year}`}
        </p>
        <span className="font-mono text-[11px] text-faint">{String(index + 1).padStart(2, "0")}</span>
      </div>

      <h3 className="mt-5 font-display text-2xl font-bold leading-tight tracking-tight md:text-[1.7rem]">
        {project.name}
      </h3>
      <p className="mt-3 leading-relaxed text-muted">{project.shortDesc}</p>

      {project.metrics && project.metrics.length > 0 && (
        <ul className="mt-6 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
          {project.metrics.map((m) => (
            <li key={m} className="bg-bg-2 px-4 py-3 text-sm font-semibold text-text">
              {m}
            </li>
          ))}
        </ul>
      )}

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.tags.slice(0, 6).map((t) => (
          <li key={t} className="chip">
            {t}
          </li>
        ))}
        {project.tags.length > 6 && <li className="chip">+{project.tags.length - 6}</li>}
      </ul>

      <details className="group/d mt-6 border-t border-line pt-5">
        <summary className="flex cursor-pointer list-none items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-text [&::-webkit-details-marker]:hidden">
          <Plus size={14} className="transition-transform group-open/d:rotate-45" />
          Details
        </summary>
        <p className="mt-4 text-sm leading-relaxed text-muted">{project.fullDesc}</p>
      </details>

      <div className="mt-auto flex items-center gap-4 pt-6">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-text transition-colors hover:text-accent"
        >
          <Github size={16} /> GitHub
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-text transition-colors hover:text-accent"
          >
            Live <ArrowUpRight size={15} />
          </a>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-x">
        <SectionHeader
          index="03"
          label="Projects"
          title="Models, meet"
          accent="real-world use."
          intro="From satellite imagery to sign language: research-driven builds, shipped end to end."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {ALL_PROJECTS.map((p, i) => (
            <FadeIn key={p.slug} delay={(i % 2) * 0.08} className={i === 0 ? "md:col-span-2" : ""}>
              <ProjectCard project={p} index={i} featured={i === 0} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
