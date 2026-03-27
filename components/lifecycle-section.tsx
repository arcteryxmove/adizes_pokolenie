"use client";

import { useCallback, useState, type KeyboardEvent } from "react";
import type { Stage } from "@/lib/data";
import { STAGES } from "@/lib/data";

function dotLabel(name: string) {
  return name.replace(" ★", "").replace(" 💀", "");
}

export function LifecycleSection() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Stage | null>(null);

  const openDetail = useCallback((s: Stage) => {
    setSelected(s);
    setOpen(true);
  }, []);

  const onKeyDot = useCallback(
    (e: KeyboardEvent<SVGGElement>, s: Stage) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openDetail(s);
      }
    },
    [openDetail],
  );

  return (
    <>
      <h2 id="s1-title">Кривая жизненного цикла</h2>
      <p className="section-lead">
        Кликните по точке на кривой, чтобы увидеть детали стадии: спираль, оргструктура, риски и
        действия.
      </p>

      <div className="curve-wrap">
        <svg
          className="curve-svg"
          viewBox="0 0 1000 300"
          role="img"
          aria-label="Кривая жизненного цикла компании"
        >
          <defs>
            <linearGradient id="curveFill" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#639922" stopOpacity="0.35" />
              <stop offset="48%" stopColor="#639922" stopOpacity="0.22" />
              <stop offset="52%" stopColor="#E24B4A" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#E24B4A" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="curveStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#639922" />
              <stop offset="50%" stopColor="#639922" />
              <stop offset="50%" stopColor="#E24B4A" />
              <stop offset="100%" stopColor="#E24B4A" />
            </linearGradient>
          </defs>

          <rect
            x="720"
            y="95"
            width="250"
            height="44"
            rx="8"
            fill="rgba(226, 75, 74, 0.18)"
            stroke="rgba(226, 75, 74, 0.45)"
          />
          <text x="845" y="122" textAnchor="middle" className="curve-label" fill="#E24B4A">
            ЗОНА УМИРАНИЯ
          </text>

          <text x="500" y="38" textAnchor="middle" className="curve-label" fill="#639922">
            ПИКОВАЯ ЗРЕЛОСТЬ
          </text>

          <path
            d="M 55 229 C 190 228, 320 200, 400 120 C 450 75, 470 58, 500 55 C 530 58, 560 85, 620 130 C 720 210, 820 228, 935 232"
            fill="none"
            stroke="url(#curveStroke)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M 55 229 C 190 228, 320 200, 400 120 C 450 75, 470 58, 500 55 C 530 58, 560 85, 620 130 C 720 210, 820 228, 935 232 L 935 280 L 55 280 Z"
            fill="url(#curveFill)"
          />

          <line
            x1="500"
            y1="55"
            x2="500"
            y2="280"
            stroke="#639922"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            opacity="0.65"
          />

          <g>
            {STAGES.map((s) => (
              <g
                key={s.id}
                className="dot-hit"
                tabIndex={0}
                role="button"
                aria-label={`${s.name} — подробности`}
                onClick={() => openDetail(s)}
                onKeyDown={(e) => onKeyDot(e, s)}
              >
                <circle
                  className="curve-dot"
                  cx={s.cx}
                  cy={s.cy}
                  r={s.r}
                  fill={s.color}
                  stroke="rgba(255,255,255,0.35)"
                  strokeWidth={s.id === 5 || s.id === 10 ? 2 : 1.5}
                />
                <text
                  x={s.cx}
                  y={s.cy + s.r + 14}
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="500"
                  fontFamily="Inter, sans-serif"
                >
                  {dotLabel(s.name)}
                </text>
              </g>
            ))}
          </g>
        </svg>
      </div>

      <div className={`detail-panel${open ? " is-open" : ""}`} aria-live="polite">
        {selected && (
          <article className="detail-card">
            <div className="detail-head">
              <h3>{selected.name}</h3>
              <span className="en">({selected.en})</span>
            </div>
            <div className="spiral-line">
              <span
                className="spiral-dot"
                style={{ background: selected.color }}
              />
              <span>
                <strong>Спираль:</strong> {selected.spiral}
              </span>
            </div>
            <div className="detail-grid-2">
              <div className="detail-block">
                <h4>Оргструктура</h4>
                <p>{selected.structure}</p>
              </div>
              <div className="detail-block">
                <h4>Сильные стороны</h4>
                <p>{selected.strengths}</p>
              </div>
              <div className="detail-block">
                <h4>Риски</h4>
                <p>{selected.risks}</p>
              </div>
              <div className="detail-block">
                <h4>Коллинз</h4>
                <p>{selected.collins}</p>
              </div>
            </div>
            <div className="action-box">
              <strong>Что делать?</strong>
              <p style={{ margin: "8px 0 0" }}>{selected.action}</p>
            </div>
          </article>
        )}
      </div>
    </>
  );
}
