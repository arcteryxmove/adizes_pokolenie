import type { CSSProperties } from "react";
import { getTagPillStyle, STAGES } from "@/lib/data";

export function StagesGrid() {
  return (
    <div className="cards-grid">
      {STAGES.map((s) => (
        <article
          key={s.id}
          className="stage-card"
          style={{ "--stage-color": s.color } as CSSProperties}
        >
          <div className="stage-card-header">
            <div className="stage-num">{s.id}</div>
            <div className="stage-title-wrap">
              <h3>{s.name}</h3>
              <div className="en">{s.en}</div>
              <div className="spiral-row">
                <span
                  className="mini-dot"
                  style={{ background: s.color }}
                  aria-hidden
                />
                <span>{s.spiral}</span>
              </div>
            </div>
          </div>
          <span className="tag-pill" style={getTagPillStyle(s.tagTone)}>
            {s.tag}
          </span>
          <div className="stage-card-grid">
            <div>
              <div className="label">Структура</div>
              {s.structure}
            </div>
            <div>
              <div className="label">Действие</div>
              {s.action}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
