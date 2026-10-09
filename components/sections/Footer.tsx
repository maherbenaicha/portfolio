import { IDENTITY } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-x flex flex-col gap-3 py-8 text-sm md:flex-row md:items-center md:justify-between">
        <p className="flex flex-col gap-1 md:flex-row md:items-center md:gap-6">
          <span className="font-display font-bold text-text">{IDENTITY.name}</span>
          <span className="text-muted">Learning, building and shipping intelligent systems.</span>
        </p>
        <a href="#top" className="text-muted transition-colors hover:text-accent">
          Back to top
        </a>
      </div>
    </footer>
  );
}
