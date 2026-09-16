"use client";

import { ALL_PROJECTS, type Project } from "@/lib/portfolio-data";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="group relative rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "rgba(10, 13, 26, 0.6)",
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: "0 0 40px rgba(124,58,237,0.12) inset",
          border: "1px solid rgba(124,58,237,0.2)",
        }}
      />

      {/* Emoji icon */}
      <div className="text-4xl mb-5">{project.emoji}</div>

      {/* Title */}
      <h3 className="text-lg font-bold text-white mb-2 leading-snug">
        {project.name}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-slate-400 mb-5">
        {project.fullDesc}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full px-3 py-1 text-[11px] font-medium text-slate-300"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* GitHub link */}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-violet-400 transition-colors"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          View on GitHub →
        </a>
      )}
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-6 py-24 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <span className="section-label">Projects</span>
          <h2 className="section-title">Engineering Projects</h2>
          <p className="section-sub">
            End-to-end systems across AI, geospatial, and full-stack domains.
          </p>
        </div>

        {/* Vertical list */}
        <div className="space-y-6">
          {ALL_PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
