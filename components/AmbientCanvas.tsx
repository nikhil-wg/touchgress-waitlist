"use client";

import { useEffect, useRef, useCallback } from "react";

interface Orb {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  hue: number;
  alpha: number;
}

export default function AmbientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const orbsRef = useRef<Orb[]>([]);
  const rafRef = useRef<number>(0);

  const initOrbs = useCallback((w: number, h: number) => {
    orbsRef.current = [
      { x: w * 0.15, y: h * 0.2, r: 340, vx: 0.18, vy: 0.12, hue: 210, alpha: 0.12 },
      { x: w * 0.8, y: h * 0.15, r: 280, vx: -0.12, vy: 0.15, hue: 240, alpha: 0.1 },
      { x: w * 0.5, y: h * 0.7, r: 380, vx: 0.1, vy: -0.1, hue: 180, alpha: 0.08 },
    ];
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initOrbs(canvas.width, canvas.height);
    };

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      for (const o of orbsRef.current) {
        const g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
        g.addColorStop(0, `hsla(${o.hue}, 30%, 60%, ${o.alpha})`);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx.fill();

        o.x += o.vx;
        o.y += o.vy;
        if (o.x < -o.r || o.x > W + o.r) o.vx *= -1;
        if (o.y < -o.r || o.y > H + o.r) o.vy *= -1;
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [initOrbs]);

  return <canvas ref={canvasRef} id="ambient-canvas" />;
}
