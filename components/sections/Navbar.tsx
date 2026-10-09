"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { SOCIALS } from "@/lib/portfolio-data";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#community", label: "Community" },
  { href: "#contact", label: "Contact" },
];

function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useEffect(() => {
    const t = document.documentElement.getAttribute("data-theme");
    setTheme(t === "light" ? "light" : "dark");
  }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable — theme still applies for this visit */
    }
  };
  return { theme, toggle };
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-bg/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="container-x flex h-[72px] items-center justify-between" aria-label="Main">
        <a href="#top" className="font-display text-lg font-extrabold tracking-tight" aria-label="Maher Ben Aicha — home">
          MB
        </a>


        <div className="flex items-center gap-2">
          <button
            type="button"
            className="icon-btn"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
          <button
            type="button"
            onClick={toggle}
            className="icon-btn"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a
            href={SOCIALS.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[42px] items-center rounded-full border border-accent px-4 text-xs font-bold text-accent transition-colors hover:bg-accent hover:text-accent-ink"
          >
            CV
          </a>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="container-x h-[calc(100dvh-72px)] overflow-y-auto pb-10 pt-6">
          <ul className="flex flex-col">
            {LINKS.map((l, i) => (
              <li key={l.href} className="border-b border-line">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-5 font-display text-3xl font-bold tracking-tight"
                >
                  <span className="font-mono text-xs text-faint">0{i + 1}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={SOCIALS.resume} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8">
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}
