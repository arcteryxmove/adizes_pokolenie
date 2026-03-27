"use client";

import type { CSSProperties } from "react";
import { useCallback, useId, useState } from "react";
import { getTagPillStyle, STAGES } from "@/lib/data";

export function StagesAccordion() {
  const baseId = useId();
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = useCallback((id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <div className="stage-accordion">
      {STAGES.map((s) => {
        const isOpen = openId === s.id;
        const headerId = `${baseId}-h-${s.id}`;
        const panelId = `${baseId}-p-${s.id}`;

        return (
          <div
            key={s.id}
            className={`stage-acc-item${isOpen ? " is-open" : ""}`}
            style={{ "--stage-color": s.color } as CSSProperties}
          >
            <button
              type="button"
              id={headerId}
              className="stage-acc-header"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(s.id)}
            >
              <span className="stage-acc-header-main">
                <span className="stage-num">{s.id}</span>
                <span className="stage-acc-titles">
                  <span className="stage-acc-title-row">
                    <span className="stage-acc-name">{s.name}</span>
                    <span className="tag-pill" style={getTagPillStyle(s.tagTone)}>
                      {s.tag}
                    </span>
                  </span>
                  <span className="en">{s.en}</span>
                  <span className="spiral-row">
                    <span
                      className="mini-dot"
                      style={{ background: s.color }}
                      aria-hidden
                    />
                    <span>{s.spiral}</span>
                  </span>
                </span>
              </span>
              <span className="stage-acc-chevron" aria-hidden>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              aria-hidden={!isOpen}
              className="stage-acc-panel"
            >
              <div className="stage-acc-panel-inner">
                <div className="stage-card-grid stage-acc-grid">
                  <div>
                    <div className="label">Структура</div>
                    {s.structure}
                  </div>
                  <div>
                    <div className="label">Действие</div>
                    {s.action}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
