import Image from "next/image";
import { ArrowDownRight, Github, Linkedin, Mail } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { TechIcon } from "@/components/ui/TechIcon";
import { ABOUT_HIGHLIGHT, ABOUT_SUMMARY, HERO, IDENTITY, PORTRAIT, SOCIALS } from "@/lib/portfolio-data";

const ORBIT = ["Python", "PyTorch", "OpenCV", "YOLOv8", "Hugging Face", "React", "TensorFlow", "Docker"];

/** Portrait at the center with the core stack orbiting around it. */
function Orbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]">
      <div className="absolute inset-[6%] rounded-full border border-line" />
      <div className="absolute inset-[18%] rounded-full border border-dashed border-line-strong" />
      <div
        className="absolute inset-[22%] rounded-full blur-2xl"
        style={{ background: "radial-gradient(closest-side, var(--glow), transparent)" }}
      />
      <div className="absolute inset-[27%] overflow-hidden rounded-full border-2 border-accent bg-bg-2 shadow-[0_0_90px_var(--glow)]">
        <Image
          src={PORTRAIT.current}
          alt={PORTRAIT.alt}
          fill
          priority
          sizes="(min-width: 1024px) 220px, 45vw"
          className="object-cover object-[50%_35%]"
        />
      </div>
      <div className="orbit-spin absolute inset-[6%]" aria-hidden="true">
        {ORBIT.map((name, i) => {
          const angle = (i / ORBIT.length) * 2 * Math.PI;
          const x = 50 + 50 * Math.cos(angle);
          const y = 50 + 50 * Math.sin(angle);
          return (
            <span
              key={name}
              className="orbit-counter absolute grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border border-line-strong bg-bg-2 text-text shadow-lg"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <TechIcon name={name} size={22} />
            </span>
          );
        })}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[112px] md:pt-[140px]">
      <div className="container-x relative">
        <FadeIn onView={false}>
          <p className="eyebrow flex flex-wrap items-center gap-3">
            <span>{IDENTITY.name}</span>
            <span className="h-px w-10 bg-line-strong" />
            <span>{HERO.eyebrow}</span>
          </p>
        </FadeIn>

        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <FadeIn onView={false} delay={0.08}>
              <h1 className="mt-7 font-display text-[clamp(2.7rem,7.4vw,5.6rem)] font-extrabold leading-[0.98] tracking-[-0.045em]">
                {HERO.line1}
                <br />
                <span className="serif-accent text-[1.04em]">{HERO.accent}</span>
                <br />
                {HERO.line3}
              </h1>
            </FadeIn>

            <FadeIn onView={false} delay={0.16}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
                Software engineering student at ENIT, working on computer vision, LLM-powered tools and full-stack
                applications.
              </p>
            </FadeIn>

            <FadeIn onView={false} delay={0.24}>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                <a href="#projects" className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-text">
                  View my projects
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-accent text-accent-ink transition-transform group-hover:rotate-[-45deg]">
                    <ArrowDownRight size={18} />
                  </span>
                </a>
                <a
                  href={SOCIALS.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-[0.16em] text-muted transition-colors hover:text-accent"
                >
                  Download CV
                </a>
                <div className="flex items-center gap-2">
                  <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn">
                    <Linkedin size={16} />
                  </a>
                  <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub">
                    <Github size={16} />
                  </a>
                  <a href={`mailto:${SOCIALS.email}`} className="icon-btn" aria-label="Email">
                    <Mail size={16} />
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn onView={false} delay={0.32}>
              <p className="mt-10 flex items-center gap-3 text-sm text-muted">
                <span className="pulse-dot h-2 w-2 shrink-0 rounded-full bg-accent" />
                {HERO.availability}
              </p>
            </FadeIn>
          </div>

          <FadeIn onView={false} delay={0.2} y={36}>
            <Orbit />
          </FadeIn>
        </div>
      </div>

      <div id="about" className="container-x mt-24 border-t border-line pb-20 pt-16 md:mt-32 md:pb-28">
        <FadeIn>
          <p className="max-w-4xl text-lg font-semibold leading-relaxed text-text md:text-xl md:leading-[1.65]">
            {ABOUT_SUMMARY}
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-muted md:text-lg">{ABOUT_HIGHLIGHT}</p>
        </FadeIn>
      </div>
    </section>
  );
}
