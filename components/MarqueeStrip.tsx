"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaPython,
  FaJs,
  FaLaravel,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiCodeigniter,
  SiPhpmyadmin,
} from "react-icons/si";

const ITEMS = [
  { icon: FaHtml5, text: "HTML" },
  { icon: FaCss3Alt, text: "CSS" },
  { icon: SiPhpmyadmin, text: "phpMyAdmin" },
  { icon: FaPython, text: "Python" },
  { icon: FaJs, text: "JavaScript" },
  { icon: FaPhp, text: "PHP" },
  { icon: FaLaravel, text: "Laravel" },
  { icon: SiCodeigniter, text: "CodeIgniter" },
  { icon: SiNextdotjs, text: "Next.js" },
  { icon: FaGitAlt, text: "Git" },
  { icon: FaGithub, text: "GitHub" },
];

export default function MarqueeStrip() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2;

    const tween = gsap.to(track, {
      x: -totalWidth,
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  const allItems = [...ITEMS, ...ITEMS];

  return (
    <div
      style={{
        padding: "18px 0",
        borderBottom: "1px solid var(--border-color)",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: "40px",
          width: "max-content",
        }}
      >
        {allItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "20px",
                color: "var(--fg)",
                whiteSpace: "nowrap",
              }}
            >
              <Icon size={28} />
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}