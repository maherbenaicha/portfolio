import { FadeIn } from "@/components/motion/FadeIn";

type Props = {
  index: string;
  label: string;
  title: string;
  accent: string;
  intro?: string;
};

/** "01 — Label" eyebrow, a bold title with an italic serif accent, and an optional intro. */
export function SectionHeader({ index, label, title, accent, intro }: Props) {
  return (
    <FadeIn className="mb-14 grid gap-6 md:mb-20 md:grid-cols-[1fr_minmax(0,380px)] md:items-end">
      <div>
        <p className="eyebrow flex items-center gap-3">
          <span className="text-faint">{index}</span>
          <span className="h-px w-8 bg-line-strong" />
          {label}
        </p>
        <h2 className="section-title mt-5">
          {title} <span className="serif-accent">{accent}</span>
        </h2>
      </div>
      {intro && <p className="text-base leading-relaxed text-muted md:pb-2">{intro}</p>}
    </FadeIn>
  );
}
