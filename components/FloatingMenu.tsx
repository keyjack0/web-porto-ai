"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const NAV_LINKS = [
  { href: "#hero",    label: "HOME",    num: "00" },
  { href: "#work",    label: "WORK",    num: "01" },
  { href: "#about",   label: "ABOUT",   num: "02" },
  { href: "#skills",  label: "SKILLS",  num: "03" },
  { href: "#contact", label: "CONTACT", num: "04" },
];

export default function FloatingMenu() {
  const [open, setOpen]     = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const overlayRef  = useRef<HTMLDivElement>(null);
  const menuRef     = useRef<HTMLDivElement>(null);
  const itemsRef    = useRef<HTMLDivElement>(null);
  const btnRef      = useRef<HTMLButtonElement>(null);
  const line1Ref    = useRef<HTMLSpanElement>(null);
  const line2Ref    = useRef<HTMLSpanElement>(null);
  const line3Ref    = useRef<HTMLSpanElement>(null);

  /* ── sync theme state ─────────────────────────────── */
  useEffect(() => {
    const stored = localStorage.getItem("theme") ?? "dark";
    setIsDark(stored === "dark");

    // keep in sync if Navbar also changes theme
    const obs = new MutationObserver(() => {
      const t = document.documentElement.getAttribute("data-theme");
      setIsDark(t === "dark");
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, []);

  /* ── detect mobile screen ──────────────────────────── */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* ── open / close animation ───────────────────────── */
  useEffect(() => {
    const overlay = overlayRef.current;
    const menu    = menuRef.current;
    const items   = itemsRef.current?.children;
    const l1 = line1Ref.current;
    const l2 = line2Ref.current;
    const l3 = line3Ref.current;
    if (!overlay || !menu || !items || !l1 || !l2 || !l3) return;

    if (open) {
      // Show overlay + panel
      gsap.set(overlay, { display: "flex" });
      gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: "power2.out" });
      gsap.fromTo(
        menu,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.45, ease: "expo.out" }
      );
      // Stagger nav items
      gsap.fromTo(
        items,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, stagger: 0.07, duration: 0.5, ease: "expo.out", delay: 0.15 }
      );
      // Hamburger → X
      gsap.to(l1, { rotation: 45,  y: 7,  duration: 0.35, ease: "expo.out" });
      gsap.to(l2, { opacity: 0, scaleX: 0, duration: 0.2 });
      gsap.to(l3, { rotation: -45, y: -7, duration: 0.35, ease: "expo.out" });
    } else {
      // Hide
      gsap.to(overlay, {
        opacity: 0, duration: 0.3, ease: "power2.in",
        onComplete: () => gsap.set(overlay, { display: "none" }),
      });
      gsap.to(menu, { y: "100%", opacity: 0, duration: 0.35, ease: "expo.in" });
      // X → Hamburger
      gsap.to(l1, { rotation: 0, y: 0, duration: 0.35, ease: "expo.out" });
      gsap.to(l2, { opacity: 1, scaleX: 1, duration: 0.3, delay: 0.05 });
      gsap.to(l3, { rotation: 0, y: 0, duration: 0.35, ease: "expo.out" });
    }
  }, [open]);

  /* ── close on link click ──────────────────────────── */
  const handleLink = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 400);
  };

  /* ── toggle theme ─────────────────────────────────── */
  const toggleTheme = () => {
    const next = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    gsap.fromTo("body", { opacity: 0.7 }, { opacity: 1, duration: 0.4, ease: "power2.out" });
  };

  return (
    <>
      {/* ── Backdrop overlay ── */}
      <div
        ref={overlayRef}
        onClick={() => setOpen(false)}
        style={{
          display:         "none",
          position:        "fixed",
          inset:           0,
          zIndex:          198,
          background:      "rgba(0,0,0,0.45)",
          backdropFilter:  "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
      />

      {/* ── Slide-up menu panel ── */}
      {isMobile && (
        <div
          ref={menuRef}
          style={{
            position:     "fixed",
            bottom:       0,
            left:         0,
            right:        0,
            zIndex:       199,
            background:   "var(--bg)",
            borderTop:    "1px solid var(--border-color)",
            padding:      "32px 28px 40px",
            transform:    "translateY(100%)",
            opacity:      0,
            transition:   "background 0.5s, border-color 0.5s",
          }}
        >
        {/* Header row inside panel */}
        <div
          style={{
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
            marginBottom:   "36px",
          }}
        >
          <span
            className="font-bebas"
            style={{ fontSize: "20px", letterSpacing: "0.12em", color: "var(--fg)" }}
          >
            ARINDA.DEV
          </span>

          {/* Theme toggle inside panel */}
          {/* <button
            onClick={toggleTheme}
            style={{
              display:     "inline-flex",
              alignItems:  "center",
              gap:         "8px",
              padding:     "7px 14px",
              border:      "1px solid var(--border-color)",
              borderRadius:"999px",
              background:  "transparent",
              color:       "var(--fg)",
              fontFamily:  "var(--font-jetbrains)",
              fontSize:    "10px",
              letterSpacing:"0.1em",
              cursor:      "pointer",
              transition:  "background 0.3s, color 0.3s",
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background="var(--fg)"; el.style.color="var(--bg)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background="transparent"; el.style.color="var(--fg)"; }}
          >
            {isDark ? (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
            {isDark ? "SIANG" : "MALAM"}
          </button> */}
        </div>

        {/* Nav items */}
        <div ref={itemsRef} style={{ display: "flex", flexDirection: "column" }}>
          {NAV_LINKS.map((link) => (
            <div
              key={link.href}
              style={{ borderTop: "1px solid var(--border-color)", opacity: 0 }}
            >
              <button
                onClick={() => handleLink(link.href)}
                style={{
                  width:       "100%",
                  display:     "flex",
                  alignItems:  "center",
                  justifyContent: "space-between",
                  padding:     "18px 0",
                  background:  "transparent",
                  border:      "none",
                  cursor:      "pointer",
                  textAlign:   "left",
                }}
              >
                <span
                  className="font-bebas"
                  style={{
                    fontSize:      "clamp(36px, 10vw, 52px)",
                    letterSpacing: "-0.01em",
                    lineHeight:    1,
                    color:         "var(--fg)",
                    transition:    "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--muted)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--fg)"}
                >
                  {link.label}
                </span>
                <span
                  style={{
                    fontFamily:    "var(--font-jetbrains)",
                    fontSize:      "11px",
                    letterSpacing: "0.12em",
                    color:         "var(--muted)",
                    marginLeft:    "12px",
                  }}
                >
                  {link.num}
                </span>
              </button>
            </div>
          ))}
          {/* Last border */}
          <div style={{ borderTop: "1px solid var(--border-color)" }} />
        </div>
      </div>
      )}

      {/* ── Floating hamburger button ── */}
      {isMobile && (
        <button
          ref={btnRef}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          style={{
            position:     "fixed",
            bottom:       "28px",
            left:         "50%",
            transform:    "translateX(-50%)",
            zIndex:       200,
            display:      "flex",
            alignItems:   "center",
            gap:          "12px",
            padding:      "14px 24px",
            background:   "var(--fg)",
            color:        "var(--bg)",
            border:       "none",
            borderRadius: "999px",
            cursor:       "pointer",
            boxShadow:    "0 8px 32px rgba(0,0,0,0.35)",
            transition:   "background 0.5s, color 0.5s, transform 0.2s, box-shadow 0.3s",
          }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "translateX(-50%) scale(1.05)"}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "translateX(-50%) scale(1)"}
        >
        {/* Animated hamburger lines */}
        <div
          style={{
            display:       "flex",
            flexDirection: "column",
            justifyContent:"center",
            gap:           "5px",
            width:         "20px",
            height:        "20px",
          }}
        >
          <span
            ref={line1Ref}
            style={{
              display:         "block",
              width:           "20px",
              height:          "1.5px",
              background:      "var(--bg)",
              borderRadius:    "2px",
              transformOrigin: "center",
              transition:      "background 0.5s",
            }}
          />
          <span
            ref={line2Ref}
            style={{
              display:      "block",
              width:        "14px",
              height:       "1.5px",
              background:   "var(--bg)",
              borderRadius: "2px",
              transition:   "background 0.5s",
            }}
          />
          <span
            ref={line3Ref}
            style={{
              display:         "block",
              width:           "20px",
              height:          "1.5px",
              background:      "var(--bg)",
              borderRadius:    "2px",
              transformOrigin: "center",
              transition:      "background 0.5s",
            }}
          />
        </div>

        {/* Label */}
        <span
          style={{
            fontFamily:    "var(--font-jetbrains)",
            fontSize:      "11px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color:         "var(--bg)",
            transition:    "color 0.5s",
          }}
        >
          {open ? "TUTUP" : "MENU"}
        </span>
      </button>
      )}
    </>
  );
}
