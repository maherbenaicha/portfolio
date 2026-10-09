import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EXPERIENCE } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-x">
        <SectionHeader
          index="04"
          label="Experience"
          title="Where the work"
          accent="got real."
          intro="Internships in industry, building software that real teams use every day."
        />

        <ol className="border-t border-line">
          {EXPERIENCE.map((e, i) => (
            <FadeIn as="li" key={e.org} delay={i * 0.06} className="grid gap-6 border-b border-line py-10 md:grid-cols-[220px_1fr] md:gap-12">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{e.period}</p>
                <p className="mt-2 text-sm text-faint">{e.location}</p>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold tracking-tight">{e.org}</h3>
                <p className="mt-1 text-muted">{e.title}</p>
                <p className="mt-5 max-w-3xl leading-relaxed text-muted">{e.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {e.tech.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
