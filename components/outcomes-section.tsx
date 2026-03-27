import type { CSSProperties } from "react";
import { OUTCOME_BLOCKS } from "@/lib/data";

export function OutcomesSection() {
  return (
    <>
      <h2 id="s6-title">Итоги</h2>
      <p className="section-lead">
        Краткие выводы по спиральной динамике, стадиям, кривой Адизеса и оргструктуре роста.
      </p>
      <div className="outcomes-grid">
        {OUTCOME_BLOCKS.map((block) => (
          <article
            key={block.num}
            className="outcome-card"
            style={{ "--outcome-accent": block.accent } as CSSProperties}
          >
            <div className="outcome-card-head">
              <div className="outcome-badge" aria-hidden>
                <span className="outcome-badge-dot" />
                <span className="outcome-badge-num">{block.num}</span>
              </div>
              <h3>{block.title}</h3>
            </div>
            <div className="outcome-card-body">
              {block.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
