import { FadeIn } from "@/components/motion/FadeIn";

type Props = {
  label: string;
  title: string;
  accent: string;
  intro?: string;
};

/** Pill label, bold title with an italic serif accent, and a short intro line. */
export function SectionHeader({ label, title, accent, intro }: Props) {
  return (
    <FadeIn className="mb-10 md:mb-14">
      <span className="pill-label">{label}</span>
      <h2 className="section-title mt-5">
        {title} <span className="serif-accent">{accent}</span>
      </h2>
      {intro && <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{intro}</p>}
    </FadeIn>
  );
}
