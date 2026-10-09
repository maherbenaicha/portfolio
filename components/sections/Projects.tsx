import { Github, Plus } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechIcon, hasTechIcon } from "@/components/ui/TechIcon";
import { ALL_PROJECTS, type Project } from "@/lib/portfolio-data";

/** Generated cover: soft gradient, grid texture and the project's main tools. */
function Cover({ project, index }: { project: Project; index: number }) {
  const icons = project.tags.filter(hasTechIcon).slice(0, 4);
  const hues = [262, 285, 232, 310, 250];
  const h = hues[index % hues.length];
  return (
    <div
      className="relative flex min-h-[190px] flex-col justify-between overflow-hidden rounded-2xl border border-line p-5 md:min-h-full md:p-6"
      style={{
        background: `radial-gradient(120% 90% at 0% 0%, hsla(${h},80%,62%,0.35), transparent 60%), radial-gradient(100% 80% at 100% 100%, hsla(${h + 30},70%,55%,0.22), transparent 60%), var(--bg-2)`,
      }}
      aria-hidden="true"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      <span className="relative font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{project.category}</span>
      <div className="relative flex gap-2">
        {icons.map((t) => (
          <span key={t} className="grid h-11 w-11 place-items-center rounded-xl border border-line-strong bg-bg/70 text-text backdrop-blur">
            <TechIcon name={t} size={20} />
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="glass grid gap-6 p-4 md:grid-cols-[0.8fr_1.2fr] md:p-5">
      <Cover project={project} index={index} />
      <div className="flex flex-col py-1 md:py-2 md:pr-3">
        <span className="pill-label self-start">{project.context ?? project.year}</span>
        <h3 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight">{project.name}</h3>
        <p className="mt-2 leading-relaxed text-muted">{project.shortDesc}</p>

        {project.metrics && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.metrics.map((m) => (
              <li key={m} className="rounded-full border border-line-strong bg-surface-2 px-3 py-1 text-xs font-semibold text-text">
                {m}
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li key={t} className="chip">
              {hasTechIcon(t) && <TechIcon name={t} size={13} />}
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-5">
          <details className="group/d">
            <summary className="flex w-fit cursor-pointer list-none items-center gap-4 [&::-webkit-details-marker]:hidden">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-4 py-2 text-xs font-semibold transition-colors hover:border-accent hover:text-accent">
                <Plus size={13} className="transition-transform group-open/d:rotate-45" /> Details
              </span>
            </summary>
            <p className="mt-4 text-sm leading-relaxed text-muted">{project.fullDesc}</p>
          </details>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-line-strong px-4 py-2 text-xs font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            <Github size={13} /> GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-x">
        <SectionHeader
          label="Projects"
          title="From models"
          accent="to products."
          intro="Internship and school projects, built end to end."
        />
        <div className="space-y-5">
          {ALL_PROJECTS.map((p, i) => (
            <FadeIn key={p.slug} delay={0.04}>
              <ProjectCard project={p} index={i} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
