import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EDUCATION, LANGUAGES } from "@/lib/portfolio-data";

function monogram(school: string) {
  return school.split(/[\s—-]+/)[0].slice(0, 5).toUpperCase();
}

const LEVEL_PCT: Record<string, number> = { Native: 100, C2: 95, C1: 85, B2: 72, B1: 58, A2: 40, A1: 25 };

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container-x">
        <SectionHeader
          label="Education"
          title="The path"
          accent="so far."
          intro="The studies that shaped how I approach engineering problems."
        />

        <ol className="space-y-4">
          {EDUCATION.map((e, i) => (
            <FadeIn as="li" key={e.degree} delay={i * 0.06} className="glass flex gap-5 p-5 md:gap-6 md:p-7">
              <span
                className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-line-strong bg-bg-2 font-mono text-[11px] font-medium text-accent"
                aria-hidden="true"
              >
                {monogram(e.school)}
              </span>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">{e.period}</p>
                <h3 className="mt-1.5 font-display text-lg font-bold tracking-tight md:text-xl">{e.degree}</h3>
                <p className="mt-1 text-sm text-muted">{e.school}</p>
                {e.note && <p className="mt-2 text-sm font-semibold text-text">{e.note}</p>}
              </div>
            </FadeIn>
          ))}
        </ol>

        <FadeIn className="mt-14">
          <h3 className="font-display text-xl font-bold tracking-tight">Languages</h3>
          <ul className="mt-5 grid gap-4 sm:grid-cols-3">
            {LANGUAGES.map((l) => (
              <li key={l.name} className="glass p-5">
                <div className="flex items-baseline justify-between">
                  <span className="font-semibold">{l.name}</span>
                  <span className="font-mono text-xs text-accent">{l.level}</span>
                </div>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-line">
                  <div className="h-full rounded-full bg-accent" style={{ width: `${LEVEL_PCT[l.level] ?? 50}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
