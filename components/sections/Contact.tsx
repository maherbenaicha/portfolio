"use client";

import { useState } from "react";
import { Check, Copy, Download, Github, Linkedin, Phone } from "lucide-react";
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
    { label: "Phone", href: SOCIALS.phoneHref, icon: Phone, external: false },
    { label: "Download CV", href: SOCIALS.resume, icon: Download, external: true },
  ];

  const pill =
    "inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent";

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <FadeIn className="mb-10">
          <span className="pill-label">Contact</span>
          <h2 className="section-title mt-5">
            Let&apos;s <span className="serif-accent">talk.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            An internship, a project or a question? Drop me a message and I&apos;ll get back to you.
          </p>
        </FadeIn>

        <FadeIn delay={0.06}>
          <form onSubmit={handleSubmit} className="glass p-6 md:p-9">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="c-name" className="mb-2 block text-sm font-semibold text-muted">Name</label>
                <input id="c-name" required autoComplete="name" className="field" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div>
                <label htmlFor="c-email" className="mb-2 block text-sm font-semibold text-muted">Email</label>
                <input id="c-email" type="email" required autoComplete="email" className="field" value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="c-msg" className="mb-2 block text-sm font-semibold text-muted">Message</label>
              <textarea id="c-msg" required rows={5} className="field resize-y" value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </div>
            <button type="submit" disabled={status === "loading"}
              className="mt-5 inline-flex h-12 items-center rounded-full bg-accent px-6 text-sm font-bold text-accent-ink transition-transform hover:-translate-y-0.5 disabled:opacity-60">
              {status === "loading" ? "Sending…" : "Send message"}
            </button>
            <p role="status" aria-live="polite" className="mt-3 min-h-[1.25rem] text-sm">
              {status === "success" && <span className="text-accent">Thanks! Your message is on its way.</span>}
              {status === "error" && <span className="text-warm">Something went wrong. Please email me directly instead.</span>}
            </p>

            <div className="mt-4 flex flex-wrap gap-2 border-t border-line pt-6">
              {links.map(({ label, href, icon: Icon, external }) => (
                <a key={label} href={href} className={pill}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                  <Icon size={15} /> {label}
                </a>
              ))}
              <button type="button" onClick={copyEmail} className={pill}>
                {copied ? <Check size={15} /> : <Copy size={15} />} {copied ? "Copied!" : "Copy email"}
              </button>
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
