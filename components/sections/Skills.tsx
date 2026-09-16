"use client";

import { useEffect, useRef } from "react";
import { SKILL_BARS } from "@/lib/portfolio-data";

function SkillBar({ name, pct, delay = 0 }: { name: string; pct: number; delay?: number }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.width = `${pct}%`;
          }, delay);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [pct, delay]);

  return (
    <div className="mb-7">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-slate-200 font-medium">{name}</span>
        <span
          className="text-sm font-bold"
          style={{
            background: "linear-gradient(90deg, #ec4899, #7c3aed)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {pct}%
        </span>
      </div>
      <div className="h-[3px] w-full rounded-full bg-white/5">
        <div
          ref={barRef}
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: "0%",
            background: "linear-gradient(90deg, #ec4899, #7c3aed)",
            boxShadow: "0 0 8px rgba(236,72,153,0.5)",
          }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-24 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <span className="section-label">Technical Stack</span>
          <h2 className="section-title">Skills &amp; Expertise</h2>
          <p className="section-sub">
            A curated set of capabilities spanning AI research, computer vision, and
            full-stack engineering.
          </p>
        </div>

        {/* Two columns of skill bars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column */}
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-violet-500 mb-8">
              {SKILL_BARS.left.title}
            </p>
            {SKILL_BARS.left.items.map((item, i) => (
              <SkillBar key={item.name} name={item.name} pct={item.pct} delay={i * 120} />
            ))}
          </div>

          {/* Right column */}
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-violet-500 mb-8">
              {SKILL_BARS.right.title}
            </p>
            {SKILL_BARS.right.items.map((item, i) => (
              <SkillBar key={item.name} name={item.name} pct={item.pct} delay={i * 120} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
