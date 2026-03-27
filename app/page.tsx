import type { CSSProperties } from "react";
import { CollinsPyramid } from "@/components/collins-pyramid";
import { FadeSection } from "@/components/fade-section";
import { Hero } from "@/components/hero";
import { LifecycleSection } from "@/components/lifecycle-section";
import { SiteFooter } from "@/components/site-footer";
import { StagesGrid } from "@/components/stages-grid";
import { OutcomesSection } from "@/components/outcomes-section";
import { ORG_ROWS } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />
      <main>
        <FadeSection id="section-1" ariaLabelledBy="s1-title">
          <LifecycleSection />
        </FadeSection>

        <FadeSection id="section-2" ariaLabelledBy="s2-title">
          <h2 id="s2-title">Стадии и спиральная динамика</h2>
          <p className="section-lead">
            Десять стадий жизненного цикла: от идеи до окончания — с привязкой к спирали и уровням
            Коллинза.
          </p>
          <StagesGrid />
        </FadeSection>

        <FadeSection id="section-3" ariaLabelledBy="s3-title">
          <h2 id="s3-title">Коллинз: пять уровней лидерства</h2>
          <p className="section-lead">
            Пирамида компетенций: снизу вверх — от вклада специалиста к лидерству Уровня 5.
          </p>
          <CollinsPyramid />
          <h3
            style={{
              fontSize: "1.1rem",
              margin: "0 0 14px",
              fontWeight: 600,
            }}
          >
            Ключевые концепции Коллинза
          </h3>
          <div className="concepts-grid">
            <article className="concept-card">
              <strong>Концепция ёжика</strong>
              <p>
                Пересечение: лучше всех / нравится / приносит деньги. Соответствует Расцвету по
                Адизесу.
              </p>
            </article>
            <article className="concept-card">
              <strong>Сначала «кто», потом «что»</strong>
              <p>Нужные люди на нужных местах. Ключ к переходу Go-Go → Юность.</p>
            </article>
            <article className="concept-card">
              <strong>Технологические ускорители</strong>
              <p>Технологии ускоряют рабочую модель, не создают новую.</p>
            </article>
            <article className="concept-card">
              <strong>Культура дисциплины</strong>
              <p>Дисциплинированные люди в рамках свободы. Критично для удержания Расцвета.</p>
            </article>
          </div>
        </FadeSection>

        <FadeSection id="section-4" ariaLabelledBy="s4-title">
          <h2 id="s4-title">Где пик и где смерть</h2>
          <p className="section-lead">
            Связка пика зрелости с пятью стадиями упадка по Коллинзу и стадиями Адизеса.
          </p>

          <div className="timeline">
            <div className="timeline-track">
              <div className="timeline-line" aria-hidden />
              <div className="timeline-point">
                <div className="timeline-dot" style={{ background: "#639922" }} />
                <div className="timeline-label">РАСЦВЕТ</div>
                <div className="timeline-adizes">Расцвет ★</div>
              </div>
              <div className="timeline-point">
                <div className="timeline-dot" style={{ background: "#BA7517" }} />
                <div className="timeline-label">Self-satis</div>
                <div className="timeline-adizes">Стабильность</div>
              </div>
              <div className="timeline-point">
                <div className="timeline-dot" style={{ background: "#D85A30" }} />
                <div className="timeline-label">Arrog</div>
                <div className="timeline-adizes">Аристократия</div>
              </div>
              <div className="timeline-point">
                <div className="timeline-dot" style={{ background: "#E24B4A" }} />
                <div className="timeline-label">Deny-risk</div>
                <div className="timeline-adizes">Ранняя бюрократия</div>
              </div>
              <div className="timeline-point">
                <div className="timeline-dot" style={{ background: "#A32D2D" }} />
                <div className="timeline-label">Hail-mary</div>
                <div className="timeline-adizes">Бюрократия</div>
              </div>
              <div className="timeline-point">
                <div
                  className="timeline-dot"
                  style={{
                    background: "var(--surface)",
                    border: "2px solid #E24B4A",
                  }}
                />
                <div className="timeline-label">СМЕРТЬ</div>
                <div className="timeline-adizes">Смерть</div>
              </div>
            </div>
          </div>

          <div className="decline-cards">
            <article className="decline-card" style={{ "--dc": "#BA7517" } as CSSProperties}>
              <h4>1. Самодовольство успехом</h4>
              <p>Рост как право, а не достижение. Стадия Адизеса: Стабильность.</p>
            </article>
            <article className="decline-card" style={{ "--dc": "#D85A30" } as CSSProperties}>
              <h4>2. Самонадеянность без оснований</h4>
              <p>Недисциплинированное преследование «а вдруг» возможностей. Стадия: Аристократия.</p>
            </article>
            <article className="decline-card" style={{ "--dc": "#E24B4A" } as CSSProperties}>
              <h4>3. Отрицание риска и опасностей</h4>
              <p>Внутренняя политика, замалчивание плохих новостей. Стадия: Ранняя бюрократия.</p>
            </article>
            <article className="decline-card" style={{ "--dc": "#C42B2B" } as CSSProperties}>
              <h4>4. Поиск спасения любой ценой</h4>
              <p>Хаотичные изменения, поиск «мессии» снаружи. Стадия: Бюрократия.</p>
            </article>
            <article className="decline-card" style={{ "--dc": "#6B1414" } as CSSProperties}>
              <h4>5. Капитуляция и небытие</h4>
              <p>Сдача и ликвидация. Стадия: Смерть.</p>
            </article>
          </div>

          <div className="callout">
            <strong>Ключевой вывод:</strong> переломный момент — переход от Стабильности к
            Аристократии. Компания ещё жива, но внутренние процессы начинают важнее клиента. Именно
            здесь нужна срочная перестройка оргструктуры.
          </div>
        </FadeSection>

        <FadeSection id="section-5" ariaLabelledBy="s5-title">
          <h2 id="s5-title">Оргструктура роста</h2>
          <p className="section-lead">
            От хаоса к SBU: какие структуры соответствуют стадиям и куда двигаться дальше.
          </p>

          <div className="table-wrap">
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Стадия</th>
                  <th>Текущая структура</th>
                  <th>Что сделать</th>
                  <th>Целевая структура</th>
                </tr>
              </thead>
              <tbody>
                {ORG_ROWS.map((row) => (
                  <tr
                    key={row.stage}
                    className={`row-tint${row.prime ? " highlight-prime" : ""}`}
                    style={{ "--row-accent": row.accent } as CSSProperties}
                  >
                    <td>
                      <strong>{row.stage}</strong>
                    </td>
                    <td>{row.current}</td>
                    <td>{row.do}</td>
                    <td>{row.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3
            style={{
              fontSize: "1.1rem",
              margin: "0 0 14px",
              fontWeight: 600,
            }}
          >
            Формула структуры Расцвета
          </h3>
          <div className="formula-grid">
            <article className="formula-card">
              <strong>Принцип PAEI</strong>
              <p>
                Сбалансированная команда: Producer + Administrator + Entrepreneur + Integrator. Ни один
                стиль не доминирует.
              </p>
            </article>
            <article className="formula-card">
              <strong>Децентрализация</strong>
              <p>SBU или матрица. Каждая единица — почти отдельный P&amp;L центр.</p>
            </article>
            <article className="formula-card">
              <strong>Культура дисциплины</strong>
              <p>Люди Уровня 5. Чёткие роли, единые ценности.</p>
            </article>
            <article className="formula-card">
              <strong>Системы контроля</strong>
              <p>KPI + OKR, но не бюрократия. Процессы служат результату.</p>
            </article>
          </div>
        </FadeSection>

        <FadeSection id="section-6" ariaLabelledBy="s6-title">
          <OutcomesSection />
        </FadeSection>
      </main>
      <SiteFooter />
    </>
  );
}
