"use client";

import { useEffect, useRef, useState } from "react";

export default function LinePattern() {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const hLinesRef = useRef<{ base: number; phase: number }[]>([]);
  const vLinesRef = useRef<{ base: number; phase: number }[]>([]);
  const rafRef = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (window.innerWidth < 768) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    let w = 0;
    let h = 0;

    const spacing = 40;
    const step = 8;
    const k = 0.008;
    const speed = 0.5;
    const ampBase = 2.5;
    const ampHighlight = 7;
    const opacityBase = 0.06;
    const opacityHighlight = 0.35;
    const highlightRadius = 150;

    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const hCount = Math.floor(h / spacing);
      const vCount = Math.floor(w / spacing);

      hLinesRef.current = Array.from({ length: hCount }, (_, i) => ({
        base: spacing * (i + 0.5),
        phase: Math.random() * Math.PI * 2,
      }));

      vLinesRef.current = Array.from({ length: vCount }, (_, i) => ({
        base: spacing * (i + 0.5),
        phase: Math.random() * Math.PI * 2,
      }));
    };

    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    const animate = () => {
      const color =
        getComputedStyle(document.documentElement)
          .getPropertyValue("--fg")
          .trim() || "#ffffff";

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const t = performance.now() / 1000;

      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;

      for (const line of hLinesRef.current) {
        const dist = Math.abs(line.base - my);
        let amp = ampBase;
        let alpha = opacityBase;

        if (dist < highlightRadius && my >= 0 && my <= h) {
          const f = 1 - dist / highlightRadius;
          const ease = f * f;
          alpha = opacityBase + (opacityHighlight - opacityBase) * ease;
          amp = ampBase + (ampHighlight - ampBase) * ease;
        }

        if (alpha < 0.001) continue;
        ctx.globalAlpha = alpha;
        ctx.beginPath();

        for (let x = 0; x <= w; x += step) {
          const y =
            line.base + amp * Math.sin(k * x + speed * t + line.phase);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      for (const line of vLinesRef.current) {
        const dist = Math.abs(line.base - mx);
        let amp = ampBase;
        let alpha = opacityBase;

        if (dist < highlightRadius && mx >= 0 && mx <= w) {
          const f = 1 - dist / highlightRadius;
          const ease = f * f;
          alpha = opacityBase + (opacityHighlight - opacityBase) * ease;
          amp = ampBase + (ampHighlight - ampBase) * ease;
        }

        if (alpha < 0.001) continue;
        ctx.globalAlpha = alpha;
        ctx.beginPath();

        for (let y = 0; y <= h; y += step) {
          const x =
            line.base + amp * Math.sin(k * y + speed * t + line.phase);
          if (y === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        maskImage:
          "radial-gradient(ellipse at center, black 25%, transparent 70%)",
        WebkitMaskImage:
          "radial-gradient(ellipse at center, black 25%, transparent 70%)",
      }}
    />
  );
}
