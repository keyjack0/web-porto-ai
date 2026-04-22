"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme") ?? "dark";
    setIsDark(stored === "dark");
    document.documentElement.setAttribute("data-theme", stored);
  }, []);

  const toggleTheme = () => {
    const next = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);

    // GSAP flash transition
    gsap.fromTo(
      "body",
      { opacity: 0.7 },
      { opacity: 1, duration: 0.4, ease: "power2.out" }
    );
  };

  return (
    <nav
      id="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "var(--bg)",
        borderBottom: "1px solid var(--border-color)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        transition: "background 0.5s, border-color 0.5s",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 48px)",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          className="font-bebas hover-underline"
          style={{
            fontSize: "22px",
            letterSpacing: "0.12em",
            color: "var(--fg)",
            textDecoration: "none",
          }}
        >
          JACK.DEV
        </a>

        {/* Nav Links */}
        <div
          className="hidden md:flex items-center"
          style={{ gap: "36px" }}
        >
          {[
            { href: "#work", label: "WORK" },
            { href: "#about", label: "ABOUT" },
            { href: "#skills", label: "SKILLS" },
            { href: "#contact", label: "CONTACT" },
          ].map((link) => (
            <a key={link.href} href={link.href} className="nav-link hover-underline">
              {link.label}
            </a>
          ))}
        </div>

        {/* Theme Toggle */}
        <button
          className="theme-btn"
          onClick={toggleTheme}
          aria-label="Toggle light/dark mode"
        >
          {/* Sun Icon */}
          {isDark ? (
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
          <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "10px", letterSpacing: "0.12em" }}>
            {isDark ? "SIANG" : "MALAM"}
          </span>
        </button>
      </div>
    </nav>
  );
}
