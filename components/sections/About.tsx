import { FadeIn } from "@/components/motion/FadeIn";
import { ABOUT_SUMMARY, HERO_STATS, IDENTITY, LANGUAGES } from "@/lib/portfolio-data";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn>
          <p className="eyebrow flex items-center gap-3">
            <span className="text-faint">01</span>
            <span className="h-px w-8 bg-line-strong" />
            About
          </p>
          <h2 className="section-title mt-5">
            Code is the tool. <span className="serif-accent">Intelligence</span> is the goal.
          </h2>
        </FadeIn>

        <div>
          <FadeIn delay={0.08}>
            <p className="text-xl leading-relaxed text-text md:text-[1.4rem] md:leading-[1.55]">{ABOUT_SUMMARY}</p>
          </FadeIn>

          <FadeIn delay={0.16}>
            <dl className="mt-12 grid grid-cols-3 divide-x divide-line border-y border-line">
              {HERO_STATS.map((s) => (
                <div key={s.label} className="px-4 py-6 first:pl-0">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">{s.label}</dt>
                  <dd className="mt-2 font-display text-3xl font-extrabold tracking-tight md:text-4xl">{s.value}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>

          <FadeIn delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">Based in</span>
              <span className="text-text">{IDENTITY.location}</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">Speaks</span>
              <span className="flex flex-wrap gap-2">
                {LANGUAGES.map((l) => (
                  <span key={l.name} className="chip">
                    {l.name} <span className="text-accent">{l.level}</span>
                  </span>
                ))}
              </span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
