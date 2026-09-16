"use client";

import { useEffect, useRef } from "react";

const COLORS = ["#7c3aed", "#ec4899", "#06b6d4", "#f59e0b"];

export function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const particles: {
      x: number; y: number; vx: number; vy: number; r: number; color: string; alpha: number;
      reset: () => void;
    }[] = [];

    let W = 0;
    let H = 0;
    let frame = 0;

    function resize() {
      W = canvas!.width = window.innerWidth;
      H = canvas!.height = window.innerHeight;
    }

    function makeParticle() {
      const p = {
        x: 0, y: 0, vx: 0, vy: 0, r: 1, color: COLORS[0], alpha: 0.4,
        reset() {
          this.x = Math.random() * W;
          this.y = Math.random() * H;
          this.vx = (Math.random() - 0.5) * 0.4;
          this.vy = (Math.random() - 0.5) * 0.4;
          this.r = Math.random() * 1.8 + 0.5;
          this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
          this.alpha = Math.random() * 0.5 + 0.2;
        },
      };
      p.reset();
      return p;
    }

    resize();
    window.addEventListener("resize", resize);
    for (let i = 0; i < 90; i++) particles.push(makeParticle());

    function loop() {
      ctx!.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W || p.y < 0 || p.y > H) p.reset();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.globalAlpha = (1 - d / 120) * 0.12;
            ctx!.strokeStyle = particles[i].color;
            ctx!.lineWidth = 0.8;
            ctx!.stroke();
          }
        }
      }
      particles.forEach((p) => {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = p.color;
        ctx!.globalAlpha = p.alpha;
        ctx!.fill();
      });
      ctx!.globalAlpha = 1;
      frame = requestAnimationFrame(loop);
    }
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} id="particle-canvas" className="particle-canvas" aria-hidden />;
}
