"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const bar = barRef.current;
    const text = textRef.current;
    const pct = pctRef.current;
    if (!loader || !bar || !text || !pct) return;

    // Lock scroll during load
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loader, {
          yPercent: -100,
          duration: 0.9,
          ease: "power3.inOut",
          onComplete: () => {
            loader.style.display = "none";
            document.body.style.overflow = "";
            // Dispatch custom event so other components know loading is done
            window.dispatchEvent(new Event("loaderDone"));
          },
        });
      },
    });

    tl.to(text, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }).to(
      bar,
      {
        width: "100%",
        duration: 1.8,
        ease: "power2.inOut",
        onUpdate: function () {
          pct.textContent = Math.round(this.progress() * 100) + "%";
        },
      }
    );
  }, []);

  return (
    <div
      ref={loaderRef}
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--bg)",
        zIndex: 10000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <div
        ref={textRef}
        className="font-bebas float-label"
        style={{
          fontSize: "clamp(28px, 5vw, 64px)",
          letterSpacing: "0.15em",
          color: "var(--fg)",
          opacity: 0,
          transform: "translateY(20px)",
        }}
      >
        LOADING
      </div>

      <div className="loader-bar-wrap">
        <div ref={barRef} className="loader-bar" />
      </div>

      <span
        ref={pctRef}
        className="float-label"
        style={{ color: "var(--muted)" }}
      >
        0%
      </span>
    </div>
  );
}
