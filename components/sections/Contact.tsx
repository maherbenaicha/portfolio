"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Download, Github, Linkedin, Phone } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { SOCIALS } from "@/lib/portfolio-data";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(SOCIALS.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${SOCIALS.email}`;
    }
  }

  const links = [
    { label: "LinkedIn", href: SOCIALS.linkedin, icon: Linkedin, external: true },
    { label: "GitHub", href: SOCIALS.github, icon: Github, external: true },
    { label: SOCIALS.phone, href: SOCIALS.phoneHref, icon: Phone, external: false },
    { label: "Download CV", href: SOCIALS.resume, icon: Download, external: true },
  ];

  return (
    <section id="contact" className="section">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.05fr]">
        <FadeIn>
          <p className="eyebrow flex items-center gap-3">
            <span className="text-faint">06</span>
            <span className="h-px w-8 bg-line-strong" />
            Contact
          </p>
          <h2 className="section-title mt-5">
            Have an internship <span className="serif-accent">in mind?</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            An opportunity, a project or just a question: send me a message and I&apos;ll get back to you.
          </p>

          <button
            type="button"
            onClick={copyEmail}
            className="group mt-10 flex max-w-full items-center gap-3 text-left font-display text-lg font-semibold tracking-tight transition-colors hover:text-accent sm:text-xl"
          >
            <span className="break-all">{SOCIALS.email}</span>
            <span className="icon-btn h-9 w-9 shrink-0" aria-hidden="true">
              {copied ? <Check size={15} /> : <Copy size={15} />}
            </span>
            <span className="sr-only">{copied ? "Email copied" : "Copy email address"}</span>
          </button>

          <ul className="mt-10 border-t border-line">
            {links.map(({ label, href, icon: Icon, external }) => (
              <li key={label} className="border-b border-line">
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center justify-between py-4 text-muted transition-colors hover:text-text"
                >
                  <span className="flex items-center gap-3">
                    <Icon size={17} className="text-accent" />
                    {label}
                  </span>
                  <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.08}>
          <form onSubmit={handleSubmit} className="card space-y-5 p-7 md:p-9">
            <div>
              <label htmlFor="c-name" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                Name
              </label>
              <input
                id="c-name"
                required
                autoComplete="name"
                className="field"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="c-email" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                Email
              </label>
              <input
                id="c-email"
                type="email"
                required
                autoComplete="email"
                className="field"
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="c-msg" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                Message
              </label>
              <textarea
                id="c-msg"
                required
                rows={6}
                className="field resize-none"
                placeholder="Tell me about the role or project…"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button type="submit" disabled={status === "loading"} className="btn btn-primary w-full justify-center disabled:opacity-60">
              {status === "loading" ? "Sending…" : "Send message"}
            </button>
            <p role="status" aria-live="polite" className="min-h-[1.25rem] text-sm">
              {status === "success" && <span className="text-accent">Thanks! Your message is on its way.</span>}
              {status === "error" && (
                <span className="text-warm">Something went wrong. Please email me directly instead.</span>
              )}
            </p>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
