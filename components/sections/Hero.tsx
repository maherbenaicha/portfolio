import { ArrowDownRight, Github, Linkedin, Mail } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { HERO, IDENTITY, SOCIALS } from "@/lib/portfolio-data";

/** Original "detector view" illustration: a camera frame with live bounding
 *  boxes — a nod to the computer-vision work in the projects below. */
function VisionPanel() {
  const boxes = [
    { x: 46, y: 70, w: 120, h: 132, label: "hand · 0.94" },
    { x: 214, y: 150, w: 150, h: 92, label: "oil_slick · 0.88" },
    { x: 110, y: 262, w: 108, h: 74, label: "keypoints · 21" },
  ];
  return (
    <div className="card relative overflow-hidden p-0" aria-hidden="true">
      <div className="flex items-center justify-between border-b border-line px-4 py-3 font-mono text-[11px] text-faint">
        <span className="flex items-center gap-2">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
          live · inference
        </span>
        <span>640 × 480</span>
      </div>
      <svg viewBox="0 0 410 380" className="block w-full" style={{ ["--scan-distance" as string]: "330px" }}>
        <defs>
          <pattern id="hero-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0H0V20" fill="none" stroke="var(--line)" strokeWidth="1" />
          </pattern>
          <linearGradient id="hero-scan" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="var(--accent)" stopOpacity="0" />
            <stop offset="1" stopColor="var(--accent)" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <rect width="410" height="380" fill="var(--bg-2)" />
        <rect width="410" height="380" fill="url(#hero-grid)" />

        {/* abstract scene contours */}
        <path d="M0 300 C 80 270, 140 320, 220 290 S 340 250, 410 280" fill="none" stroke="var(--line-strong)" strokeWidth="1.2" />
        <path d="M0 330 C 90 310, 160 350, 250 325 S 360 300, 410 315" fill="none" stroke="var(--line)" strokeWidth="1.2" />
        <circle cx="330" cy="80" r="34" fill="none" stroke="var(--line-strong)" strokeWidth="1.2" />

        {/* keypoint skeleton */}
        <g stroke="var(--warm)" strokeWidth="1.4" fill="var(--warm)">
          <polyline points="94,182 104,150 112,118 118,92" fill="none" />
          <polyline points="104,150 128,128 140,104" fill="none" />
          <polyline points="104,150 82,126 72,104" fill="none" />
          {[[94, 182], [104, 150], [112, 118], [118, 92], [128, 128], [140, 104], [82, 126], [72, 104]].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.6" stroke="none" />
          ))}
        </g>

        {boxes.map((b) => (
          <g key={b.label} className="det-box">
            <rect x={b.x} y={b.y} width={b.w} height={b.h} fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="1.4" rx="3" />
            <rect x={b.x} y={b.y - 18} width={b.label.length * 6.6 + 12} height="18" fill="var(--accent)" rx="2" />
            <text x={b.x + 6} y={b.y - 5} fontFamily="var(--font-mono)" fontSize="10.5" fill="var(--accent-ink)">
              {b.label}
            </text>
          </g>
        ))}

        <g className="scanline">
          <rect x="0" y="-24" width="410" height="24" fill="url(#hero-scan)" />
          <line x1="0" x2="410" y1="0" y2="0" stroke="var(--accent)" strokeWidth="1" />
        </g>

        {/* corner brackets */}
        <g stroke="var(--text)" strokeWidth="2" fill="none" opacity="0.5">
          <path d="M14 34V14H34" />
          <path d="M376 14H396V34" />
          <path d="M396 346V366H376" />
          <path d="M34 366H14V346" />
        </g>
      </svg>
      <div className="grid grid-cols-3 border-t border-line font-mono text-[11px] text-faint">
        <span className="px-4 py-3">yolov8</span>
        <span className="border-x border-line px-4 py-3">3 objects</span>
        <span className="px-4 py-3 text-right">~30 fps</span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[120px] md:pt-[150px]">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--glow), transparent)" }}
        aria-hidden="true"
      />

      <div className="container-x relative grid items-center gap-14 pb-24 md:pb-32 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <FadeIn onView={false}>
            <p className="eyebrow flex flex-wrap items-center gap-3">
              <span className="text-text">{IDENTITY.name}</span>
              <span className="h-px w-10 bg-line-strong" />
              <span>{HERO.eyebrow}</span>
            </p>
          </FadeIn>

          <FadeIn onView={false} delay={0.08}>
            <h1 className="mt-7 font-display text-[clamp(2.7rem,7.2vw,5.4rem)] font-extrabold leading-[0.98] tracking-[-0.045em]">
              {HERO.line1}
              <br />
              <span className="serif-accent text-[1.06em]">{HERO.accent}</span>
              <br />
              <span className="text-muted">{HERO.line3}</span>
            </h1>
          </FadeIn>

          <FadeIn onView={false} delay={0.16}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
              Software engineering student at <span className="text-text">ENIT</span>, building computer vision
              pipelines, LLM-powered tools and the full-stack apps that put them in people&apos;s hands.
            </p>
          </FadeIn>

          <FadeIn onView={false} delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn btn-primary">
                View my projects <ArrowDownRight size={16} />
              </a>
              <a href={SOCIALS.resume} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                Download CV
              </a>
              <div className="flex items-center gap-2 sm:ml-2">
                <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn">
                  <Linkedin size={17} />
                </a>
                <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub">
                  <Github size={17} />
                </a>
                <a href={`mailto:${SOCIALS.email}`} className="icon-btn" aria-label="Email">
                  <Mail size={17} />
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
          <VisionPanel />
        </FadeIn>
      </div>
    </section>
  );
}
