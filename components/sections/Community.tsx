import { Plus } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CERTIFICATIONS, CLUBS } from "@/lib/portfolio-data";

type Item = { title: string; org: string; period: string; detail: string; tags?: string[] };

const ITEMS: Item[] = [
  ...CLUBS.map((c) => ({ title: c.org, org: c.role, period: c.period, detail: c.detail })),
  ...CERTIFICATIONS.map((c) => ({
    title: c.name,
    org: `${c.org} · Certification`,
    period: c.date,
    detail: c.summary,
    tags: c.skills,
  })),
];

export function Community() {
  return (
    <section id="community" className="section">
      <div className="container-x">
        <SectionHeader
          label="Community"
          title="Beyond"
          accent="the classroom."
          intro="Clubs, competitions and certifications that round out my engineering training."
        />
        <ul className="space-y-3">
          {ITEMS.map((it, i) => (
            <FadeIn as="li" key={it.org + it.title} delay={i * 0.04}>
              <details className="glass group p-5 md:p-6" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  <div>
                    <p className="font-display text-base font-bold tracking-tight md:text-lg">{it.title}</p>
                    <p className="mt-1 text-sm font-semibold text-muted">{it.org}</p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-2">
                    <Plus size={16} className="text-accent transition-transform group-open:rotate-45" aria-hidden="true" />
                    <span className="font-mono text-[11px] text-faint">{it.period}</span>
                  </div>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">{it.detail}</p>
                {it.tags && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {it.tags.map((t) => (
                      <li key={t} className="chip">
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </details>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
