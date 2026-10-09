import { IDENTITY, SOCIALS } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-x flex flex-col gap-6 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>
          <span className="font-display font-extrabold text-text">
            MB<span className="text-accent">.</span>
          </span>{" "}
          © {new Date().getFullYear()} {IDENTITY.name} · {IDENTITY.location}
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              GitHub
            </a>
          </li>
          <li>
            <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={`mailto:${SOCIALS.email}`} className="hover:text-accent">
              Email
            </a>
          </li>
          <li>
            <a href="#top" className="hover:text-accent">
              Back to top ↑
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
