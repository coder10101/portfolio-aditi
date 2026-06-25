import "../../assets/styles/education.css";
import { AWARDS, DEGREES } from "../../consts";
import { SectionLabel } from "../SectionLabel";

export function Education() {
  return (
    <section className="education-section" id="education">
      <SectionLabel index="04" title="Education" />

      <p className="education-git-command">$ cat ./credentials.json</p>

      {/* Degree cards */}
      <div className="edu-grid">
        {DEGREES.map((ed) => (
          <div key={ed.abbr} className="edu-card">
            <div className="edu-card__watermark">{ed.abbr}</div>
            <div className="edu-card__body">
              <div className="edu-card__year">{ed.year}</div>
              <h3 className="edu-card__abbr">
                {ed.abbr}
                <span> ·</span>
              </h3>
              <p className="edu-card__full">{ed.full}</p>
              <p className="edu-card__institution">{ed.institution}</p>
              <p className="edu-card__note">{ed.note}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Awards table */}
      <div className="awards-table">
        <div className="awards-table__header">
          <span>$</span> cat ./awards.md
        </div>
        {AWARDS.map((award, i) => (
          <div key={i} className="award-row">
            <div className="award-row__left">
              <div className="award-row__org">{award.org.toUpperCase()}</div>
              <div className="award-row__role">{award.role}</div>
            </div>
            <div className="award-row__right">
              <p className="award-row__desc">{award.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
