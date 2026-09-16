"use client";
import { useState } from "react";
import { SOCIALS } from "@/lib/portfolio-data";

/* ── Icon boxes for each contact type ── */
function EmailIcon() {
  return (
    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
      style={{ background: "linear-gradient(135deg, #0ea5e9, #6366f1)" }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    </div>
  );
}

function PhoneIcon() {
  return (
    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #7c3aed, #ec4899)" }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.27 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.05a16 16 0 0 0 6.86 6.86l1.41-1.41a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    </div>
  );
}

function LinkedInIcon() {
  return (
    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
      style={{ background: "linear-gradient(135deg, #2563eb, #1d4ed8)" }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    </div>
  );
}

function GitHubIcon() {
  return (
    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
      style={{ background: "linear-gradient(135deg, #f59e0b, #ef4444)" }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    </div>
  );
}

function LocationIcon() {
  return (
    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
      style={{ background: "linear-gradient(135deg, #10b981, #0891b2)" }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    </div>
  );
}

const CONTACT_ROWS = [
  {
    id: "email",
    label: "EMAIL",
    value: "maher.benaicha@etudiant-enit.utm.tn",
    href: "mailto:maher.benaicha@etudiant-enit.utm.tn",
    icon: <EmailIcon />,
  },
  {
    id: "phone",
    label: "PHONE",
    value: "+216 94 916 106",
    href: "tel:+21694916106",
    icon: <PhoneIcon />,
  },
  {
    id: "linkedin",
    label: "LINKEDIN",
    value: "maher-ben-aicha-86808a368",
    href: "https://www.linkedin.com/in/maher-ben-aicha-86808a368/",
    icon: <LinkedInIcon />,
  },
  {
    id: "github",
    label: "GITHUB",
    value: "github.com/maherbenaicha",
    href: "https://github.com/maherbenaicha",
    icon: <GitHubIcon />,
  },
  {
    id: "location",
    label: "LOCATION",
    value: "Tunis, Tunisia",
    href: null,
    icon: <LocationIcon />,
  },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

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

  return (
    <section id="contact" className="relative overflow-hidden py-24 px-0">
      {/* Contact rows */}
      <div className="mb-16">
        {CONTACT_ROWS.map((row, idx) => {
          const inner = (
            <div
              className="flex items-center gap-5 px-6 sm:px-10 lg:px-20 py-5 group"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              {row.icon}
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-0.5">
                  {row.label}
                </p>
                <p className="text-base sm:text-lg font-semibold text-white group-hover:text-violet-300 transition-colors">
                  {row.value}
                </p>
              </div>
            </div>
          );

          return row.href ? (
            <a key={row.id} href={row.href} target={row.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
              {inner}
            </a>
          ) : (
            <div key={row.id}>{inner}</div>
          );
        })}
      </div>

      {/* Contact form */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-10 text-center">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let&apos;s connect</h2>
          <p className="section-sub mx-auto text-center">
            Seeking a PFE / internship opportunity in software engineering or AI.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none transition-colors"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none transition-colors"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none transition-colors resize-none"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              placeholder="Tell me about your research, project, or opportunity."
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3 px-6 rounded-xl font-semibold text-white transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #ec4899)",
              boxShadow: "0 0 24px rgba(124,58,237,0.3)",
            }}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-center text-sm text-violet-400">
              Message sent! I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-red-400">
              Something went wrong. Email me at{" "}
              <a href="mailto:maher.benaicha@etudiant-enit.utm.tn" className="underline">
                maher.benaicha@etudiant-enit.utm.tn
              </a>
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
