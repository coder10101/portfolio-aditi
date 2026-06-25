import { useState } from "react";
import { SectionLabel } from "../SectionLabel";
import "../../assets/styles/experience.css";
import { COMMITS, TYPECOLORS } from "../../consts";

function CommitLine({ text, color }: { text: string; color: string }) {
  const colonIdx = text.indexOf(": ");
  const type = colonIdx > -1 ? text.slice(0, colonIdx) : text;
  const msg = colonIdx > -1 ? text.slice(colonIdx + 2) : "";

  return (
    <div className="commit-line-item">
      <span
        className="commit-line-type"
        style={{ color: TYPECOLORS[type] ?? color }}
      >
        {type}:
      </span>
      <span className="commit-line-msg">{msg}</span>
    </div>
  );
}

export function Experience() {
  const [expanded, setExpanded] = useState<string | null>("a3f9c12");

  return (
    <section className="experience-section" id="experience">
      <SectionLabel index="02" title="Experience" />

      <p className="experience-git-command">
        $ git log --all --graph --oneline
      </p>

      <div className="experience-list">
        {COMMITS.map((c, idx) => {
          const isOpen = expanded === c.hash;

          return (
            <div
              key={c.hash}
              className="commit-row"
              onClick={() => setExpanded(isOpen ? null : c.hash)}
            >
              {/* Graph */}
              <div className="commit-graph">
                <div
                  className={`commit-dot ${isOpen ? "active" : ""}`}
                  style={
                    {
                      "--dot-color": c.color,
                      border: `2px solid ${c.color}`,
                    } as React.CSSProperties
                  }
                />
                {idx < COMMITS.length - 1 && (
                  <div
                    className="commit-line"
                    style={{
                      background: `linear-gradient(to bottom, ${c.color}, ${COMMITS[idx + 1].color})`,
                    }}
                  />
                )}
              </div>

              {/* Hash + tag */}
              <div className="commit-meta">
                <div className="commit-hash-row">
                  <span className="commit-hash" style={{ color: c.color }}>
                    {c.hash}
                  </span>
                  {c.tag && (
                    <span
                      className="commit-tag"
                      style={{ background: c.color }}
                    >
                      {c.tag}
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div
                className={`commit-content ${isOpen ? "active" : ""}`}
                style={
                  {
                    "--dot-color": c.color,
                    paddingBottom: isOpen ? "0" : "2rem",
                  } as React.CSSProperties
                }
              >
                <div className="commit-title">{c.title}</div>
                <div className="commit-company" style={{ color: c.color }}>
                  {c.company}
                </div>
                <div className="commit-date">{c.date}</div>

                <div className={`commit-expandable ${isOpen ? "open" : ""}`}>
                  <div className="commit-details">
                    {c.items.map((item, i) => (
                      <CommitLine key={i} text={item} color={c.color} />
                    ))}
                    <div className="commit-stack">
                      {c.stack.map((t) => (
                        <span key={t} className="stack-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div
                className={`commit-arrow ${isOpen ? "open" : ""}`}
                style={{ color: c.color }}
              >
                ›
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
