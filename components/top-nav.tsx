"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { NAV_LINKS, SECTION_IDS } from "@/lib/data";
import { useTheme } from "./theme-provider";

export function TopNav() {
  const { theme, toggleTheme, mounted } = useTheme();
  const [navOpen, setNavOpen] = useState(false);
  const [active, setActive] = useState(0);

  const closeMobile = useCallback(() => {
    setNavOpen(false);
  }, []);

  useEffect(() => {
    const sectionEls = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    ) as HTMLElement[];

    const onScroll = () => {
      const mid = window.scrollY + window.innerHeight * 0.25;
      let idx = 0;
      sectionEls.forEach((sec, i) => {
        if (sec.offsetTop <= mid) idx = i;
      });
      setActive(idx);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="top-bar">
      <div className="top-bar-inner">
        <Link className="brand" href="/">
          Жизненный цикл
        </Link>
        <nav
          className={`section-nav${navOpen ? " is-open" : ""}`}
          id="sectionNav"
          aria-label="Разделы страницы"
        >
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={i === active ? "active" : undefined}
              onClick={() => {
                if (typeof window !== "undefined" && window.innerWidth <= 900) {
                  closeMobile();
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={navOpen}
          aria-controls="sectionNav"
          aria-label="Открыть меню"
          onClick={() => setNavOpen((o) => !o)}
        >
          {navOpen ? "✕" : "☰"}
        </button>
        <button
          type="button"
          className="theme-toggle"
          title="Тема"
          aria-label={mounted && theme === "light" ? "Тёмная тема" : "Светлая тема"}
          onClick={toggleTheme}
        >
          {mounted && theme === "light" ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
}
