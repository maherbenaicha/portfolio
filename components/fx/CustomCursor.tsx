"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    let frame = 0;
    const onMove = (e: MouseEvent) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      if (dot.current) {
        dot.current.style.left = `${e.clientX}px`;
        dot.current.style.top = `${e.clientY}px`;
      }
    };
    const tick = () => {
      pos.current.rx += (pos.current.mx - pos.current.rx) * 0.12;
      pos.current.ry += (pos.current.my - pos.current.ry) * 0.12;
      if (ring.current) {
        ring.current.style.left = `${pos.current.rx}px`;
        ring.current.style.top = `${pos.current.ry}px`;
      }
      frame = requestAnimationFrame(tick);
    };
    const grow = () => ring.current?.classList.add("is-hover");
    const shrink = () => ring.current?.classList.remove("is-hover");

    window.addEventListener("mousemove", onMove);
    frame = requestAnimationFrame(tick);
    const bind = () => {
      document.querySelectorAll("a,button,.project-card,.tl-item,.contact-card").forEach((el) => {
        el.addEventListener("mouseenter", grow);
        el.addEventListener("mouseleave", shrink);
      });
    };
    bind();
    const mo = new MutationObserver(bind);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
      mo.disconnect();
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={dot} id="cursor-dot" />
      <div ref={ring} id="cursor-ring" />
    </>
  );
}
