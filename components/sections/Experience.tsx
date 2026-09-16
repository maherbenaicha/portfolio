import { BriefcaseBusiness, FileText, MapPin } from "lucide-react";
import { CERTIFICATIONS as CERTS, EXPERIENCE, type ExperienceEntry } from "@/lib/portfolio-data";

function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <article
      className="relative rounded-2xl p-6 sm:p-8 transition-all duration-300"
      style={{
        background: "rgba(10, 13, 26, 0.6)",
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Left accent bar */}
      <div
        className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full"
        style={{ background: "linear-gradient(180deg, #7c3aed, #ec4899)" }}
      />

      {/* Year */}
      <p className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-violet-400">
        {entry.period}
      </p>

      {/* Title */}
      <h4 className="text-xl font-bold text-white mb-1">{entry.title}</h4>

      {/* Company */}
      <p
        className="text-sm font-semibold mb-2"
        style={{ color: "#f97316" }}
      >
        {entry.org}
      </p>

      {/* Location */}
      <p className="flex items-center gap-1.5 text-sm text-slate-400 mb-4">
        <MapPin size={13} className="shrink-0 text-slate-500" />
        {entry.location}
      </p>

      {/* Description */}
      <p className="text-sm leading-relaxed text-slate-300 mb-5">{entry.description}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {entry.tech.map((skill) => (
          <span
            key={skill}
            className="rounded-full px-3 py-1 text-[11px] font-medium text-slate-300"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Links */}
      {entry.links.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-3">
          {entry.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-slate-300 transition-colors"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <FileText size={14} />
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export function Experience() {
  return (
    <>
      <section id="experience" className="relative overflow-hidden px-6 py-24 lg:px-20">
        <div className="relative z-10 mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-14">
            <span className="section-label">Career</span>
            <h2 className="section-title">Professional Experience</h2>
            <p className="section-sub">
              Engineering internships translating research into production systems.
            </p>
          </div>

          <div className="space-y-6">
            {EXPERIENCE.map((entry) => (
              <ExperienceCard key={entry.org + entry.period} entry={entry} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="relative overflow-hidden px-6 py-16 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div id="certifications" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-10 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: "rgba(124,58,237,0.15)",
                  border: "1px solid rgba(124,58,237,0.25)",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Certifications</h3>
            </div>

            <div className="space-y-5">
              {CERTS.map((cert) => (
                <div
                  key={cert.name}
                  className="rounded-2xl p-6"
                  style={{
                    background: "rgba(10, 13, 26, 0.6)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                      style={{
                        background: "rgba(124,58,237,0.12)",
                        border: "1px solid rgba(124,58,237,0.2)",
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="6" />
                        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-semibold text-white">{cert.name}</p>
                      <p className="text-xs text-violet-400 mt-0.5">{cert.org} · {cert.date}</p>
                      <p className="text-sm text-slate-400 mt-3 leading-relaxed">{cert.summary}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] px-3 py-1 rounded-full text-slate-300"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  {(cert.href || cert.verifyHref) && (
                    <div className="mt-4 flex flex-wrap gap-3">
                      {cert.href && (
                        <a href={cert.href} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-slate-400 hover:text-violet-400 transition-colors">
                          View certificate →
                        </a>
                      )}
                      {cert.verifyHref && (
                        <a href={cert.verifyHref} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-slate-400 hover:text-violet-400 transition-colors">
                          Verify →
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
