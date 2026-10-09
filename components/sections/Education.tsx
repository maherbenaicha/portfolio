import { Award, Users } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CERTIFICATIONS, CLUBS, EDUCATION } from "@/lib/portfolio-data";

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container-x">
        <SectionHeader
          index="05"
          label="Education & beyond"
          title="The foundations"
          accent="I'm building on."
          intro="Engineering school, the preparatory years before it, and what happens outside the classroom."
        />

        <ol className="relative ml-1 border-l border-line">
          {EDUCATION.map((e, i) => (
            <FadeIn as="li" key={e.degree} delay={i * 0.06} className="relative pb-12 pl-8 last:pb-0 md:pl-12">
              <span
                className={`absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full ${
                  i === 0 ? "bg-accent" : "border border-line-strong bg-bg"
                }`}
                aria-hidden="true"
              />
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{e.period}</p>
              <h3 className="mt-3 font-display text-xl font-bold tracking-tight md:text-2xl">{e.degree}</h3>
              <p className="mt-1 text-muted">{e.school}</p>
              {e.note && <p className="mt-3 inline-block text-sm text-warm">{e.note}</p>}
            </FadeIn>
          ))}
        </ol>

        <div className="mt-20 grid gap-5 md:grid-cols-2">
          <FadeIn className="card h-full p-7 md:p-9">
            <h3 className="flex items-center gap-3 font-display text-xl font-bold tracking-tight">
              <Users size={18} className="text-accent" /> Community
            </h3>
            <ul className="mt-6 space-y-6">
              {CLUBS.map((c) => (
                <li key={c.org}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <p className="font-semibold">{c.org}</p>
                    <p className="font-mono text-[11px] text-faint">{c.period}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-accent">{c.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.detail}</p>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.08} className="card h-full p-7 md:p-9">
            <h3 className="flex items-center gap-3 font-display text-xl font-bold tracking-tight">
              <Award size={18} className="text-accent" /> Certifications
            </h3>
            <ul className="mt-6 space-y-6">
              {CERTIFICATIONS.map((c) => (
                <li key={c.name}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <p className="font-semibold">{c.name}</p>
                    <p className="font-mono text-[11px] text-faint">{c.date}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-accent">{c.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.summary}</p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
