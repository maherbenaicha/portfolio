import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechIcon } from "@/components/ui/TechIcon";
import { SKILL_CATEGORIES } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-x">
        <SectionHeader
          label="Skills"
          title="The tools I"
          accent="build with."
          intro="An overview of the methods, frameworks and tools I use day to day."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {SKILL_CATEGORIES.map((cat, i) => (
            <FadeIn key={cat.title} delay={(i % 2) * 0.06} className="glass p-6 md:p-8">
              <h3 className="font-display text-lg font-bold tracking-tight md:text-xl">{cat.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{cat.blurb}</p>
              <ul className="mt-6 grid grid-cols-3 gap-2.5 sm:grid-cols-4">
                {cat.items.map((item) => (
                  <li key={item} className="tile">
                    <span className="text-text">
                      <TechIcon name={item} size={26} />
                    </span>
                    <span className="leading-tight">{item}</span>
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
