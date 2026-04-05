"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const ITEMS = [
  { text: "UI/UX DESIGN", serif: false },
  { text: "— Figma", serif: true },
  { text: "USER RESEARCH", serif: false },
  { text: "— Prototyping", serif: true },
  { text: "SISTEM INFORMASI", serif: false },
  { text: "— Adobe XD", serif: true },
  { text: "INTERACTION DESIGN", serif: false },
  { text: "— Wireframing", serif: true },
  { text: "DESIGN THINKING", serif: false },
  { text: "— Usability Testing", serif: true },
];

export default function MarqueeStrip() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2;

    const tween = gsap.to(track, {
      x: -totalWidth,
      duration: 35,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  const allItems = [...ITEMS, ...ITEMS]; // duplicate for seamless loop

  return (
    <div
      className="section-border marquee-wrap"
      style={{
        paddingTop: "18px",
        paddingBottom: "18px",
        borderBottom: "1px solid var(--border-color)",
      }}
    >
      <div ref={trackRef} className="marquee-track">
        {allItems.map((item, i) => (
          <div
            key={i}
            className="marquee-item"
            style={{
              fontSize: item.serif ? "28px" : "36px",
              fontFamily: item.serif
                ? "var(--font-dm-serif)"
                : "var(--font-bebas)",
              fontStyle: item.serif ? "italic" : "normal",
              color: item.serif ? "var(--fg)" : "var(--muted)",
              letterSpacing: item.serif ? "0.02em" : "0.1em",
            }}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}
