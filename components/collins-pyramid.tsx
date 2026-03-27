"use client";

import { useTheme } from "./theme-provider";
import { LEVELS } from "@/lib/data";

export function CollinsPyramid() {
  const { theme, mounted } = useTheme();
  const isDark = !mounted || theme !== "light";

  return (
    <div className="pyramid">
      {LEVELS.map((L) => {
        let bg = L.bg;
        let fg = L.fg;
        if (isDark && !L.l5) {
          fg = L.fg;
          bg = `color-mix(in srgb, var(--surface) 92%, ${L.fg})`;
        }
        if (isDark && L.l5) {
          bg = "color-mix(in srgb, var(--accent-green) 25%, var(--surface))";
          fg = "#f0ede8";
        }
        if (!isDark && L.l5) {
          bg = L.bg;
          fg = L.fg;
        }

        return (
          <div
            key={L.n}
            className={`level-card${L.l5 ? " l5" : ""}`}
            style={{
              background: L.l5 && !isDark ? L.bg : bg,
              color: fg,
              borderColor: L.l5 ? "var(--accent-green)" : "var(--border)",
            }}
          >
            <h4>
              Уровень {L.n}
              {L.n === 5 ? " ★" : ""} — {L.title}
            </h4>
            <p>{L.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
