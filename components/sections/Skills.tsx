import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SKILL_CATEGORIES } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-x">
        <SectionHeader
          index="02"
          label="Skills"
          title="The tools I"
          accent="think with."
          intro="Grouped by what they're for, from training models to shipping the apps around them."
        />

        <div className="grid gap-px overflow-hidden rounded-[20px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((cat, i) => (
            <FadeIn key={cat.title} delay={(i % 3) * 0.06} className="bg-surface p-7 md:p-8">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-xl font-bold tracking-tight">{cat.title}</h3>
                <span className="font-mono text-[11px] text-faint">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{cat.blurb}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
