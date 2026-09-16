import { FileText, ArrowUpRight } from "lucide-react";
import { EDUCATION, CLUBS, LANGUAGES } from "@/lib/portfolio-data";

const EDUCATION_BADGES: Record<string, string> = {
  "Final year": "🏆 Final Year",
  "High Honors — Rank: MP 387": "🏆 High Honors · Rank MP 387",
};

export const Education = () => {
  return (
    <section id="education" className="relative overflow-hidden py-24 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <span className="section-label">Background</span>
          <h2 className="section-title">Education</h2>
        </div>

        {/* Education cards */}
        <div className="space-y-5 mb-16">
          {EDUCATION.map((edu) => (
            <div
              key={edu.degree}
              className="rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(10, 13, 26, 0.6)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(12px)",
              }}
            >
              <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
              <p className="text-sm font-semibold mb-2" style={{ color: "#06b6d4" }}>
                {edu.school}
              </p>
              <p className="text-sm text-slate-400 mb-4">{edu.period}</p>
              {edu.note && (
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium text-slate-200"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  {EDUCATION_BADGES[edu.note] ?? `🏆 ${edu.note}`}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Clubs & Community */}
        <div id="clubs-community" className="scroll-mt-24 mb-16">
          <h3
            className="text-xs font-bold tracking-[0.2em] uppercase mb-8"
            style={{ color: "#a855f7" }}
          >
            Clubs &amp; Community
          </h3>
          <div className="space-y-5">
            {CLUBS.map((club) => (
              <div
                key={club.org}
                className="rounded-2xl p-6 sm:p-8"
                style={{
                  background: "rgba(10, 13, 26, 0.6)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <h4 className="text-base font-bold text-white mb-1">{club.role}</h4>
                <p className="text-sm font-semibold mb-1" style={{ color: "#06b6d4" }}>
                  {club.org}
                </p>
                <p className="text-xs text-slate-500 mb-3">{club.period}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{club.detail}</p>
                {club.certificate && (
                  <a
                    href={club.certificate.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:text-violet-400"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <FileText size={14} />
                    View Certificate
                    <span className="text-xs text-slate-500">PDF</span>
                    <ArrowUpRight size={13} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <h3
            className="text-xs font-bold tracking-[0.2em] uppercase mb-6"
            style={{ color: "#a855f7" }}
          >
            Languages
          </h3>
          <div className="flex flex-wrap gap-3">
            {LANGUAGES.map((lang) => (
              <span
                key={lang.name}
                className="rounded-full px-4 py-1.5 text-sm text-slate-200"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {lang.name}{" "}
                <span className="text-violet-400 font-mono text-xs">· {lang.level}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
