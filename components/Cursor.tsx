"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      gsap.to(dot, { x: mx, y: my, duration: 0.05, ease: "none" });
    };

    document.addEventListener("mousemove", onMove);

    const ticker = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      gsap.set(ring, { x: rx, y: ry });
    };
    gsap.ticker.add(ticker);

    // Hover effect
    const hoverEls = document.querySelectorAll(
      "a, button, .project-card, .tool-card, input, textarea"
    );
    const addClass = () => ring.classList.add("hovering");
    const removeClass = () => ring.classList.remove("hovering");

    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", addClass);
      el.addEventListener("mouseleave", removeClass);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      gsap.ticker.remove(ticker);
      hoverEls.forEach((el) => {
        el.removeEventListener("mouseenter", addClass);
        el.removeEventListener("mouseleave", removeClass);
      });
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
