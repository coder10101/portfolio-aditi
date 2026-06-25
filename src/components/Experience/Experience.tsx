import { useState } from "react";
import { COMMITS, TYPECOLORS } from "../../consts";
import { SectionLabel } from "../SectionLabel";

function CommitLine({ text, color }: { text: string; color: string }) {
  const colonIdx = text.indexOf(": ");
  const type = colonIdx > -1 ? text.slice(0, colonIdx) : text;
  const msg = colonIdx > -1 ? text.slice(colonIdx + 2) : "";

  return (
    <div className="flex gap-[10px] font-mono text-[12.5px] leading-[1.8]">
      <span
        className="min-w-[52px] shrink-0"
        style={{ color: TYPECOLORS[type] ?? color }}
      >
        {type}:
      </span>
      <span className="text-white/55">{msg}</span>
    </div>
  );
}

export function Experience() {
  const [expanded, setExpanded] = useState<string | null>("a3f9c12");

  return (
    <section id="experience" className="px-8 py-[100px] max-w-[1200px] mx-auto">
      <SectionLabel index="02" title="Experience" />

      <p className="font-mono text-[12px] text-[var(--muted-foreground)] mt-4 mb-12 tracking-[0.06em]">
        $ git log --all --graph --oneline
      </p>

      <div className="flex flex-col">
        {COMMITS.map((commit, idx) => {
          const isOpen = expanded === commit.hash;

          return (
            <div
              key={commit.hash}
              className="grid grid-cols-[24px_auto_1fr_auto] gap-x-4 items-start cursor-pointer"
              onClick={() => setExpanded(isOpen ? null : commit.hash)}
            >
              {/* Graph */}
              <div className="flex flex-col items-center pt-[2px]">
                <div
                  className="w-[14px] h-[14px] rounded-full shrink-0 z-10 transition-colors duration-200"
                  style={{
                    background: isOpen ? commit.color : "var(--secondary)",
                    border: `2px solid ${commit.color}`,
                  }}
                />
                {idx < COMMITS.length - 1 && (
                  <div
                    className="w-[2px] grow min-h-[60px] opacity-30"
                    style={{
                      background: `linear-gradient(to bottom, ${commit.color}, ${COMMITS[idx + 1].color})`,
                    }}
                  />
                )}
              </div>

              {/* Hash + tag */}
              <div className="pt-[1px]">
                <div className="flex gap-2 items-center mb-1">
                  <span
                    className="font-mono text-[12px] tracking-[0.06em]"
                    style={{ color: commit.color }}
                  >
                    {commit.hash}
                  </span>
                  {commit.tag && (
                    <span
                      className="font-mono text-[10px] text-[#0a0a0e] px-2 py-[1px] rounded-[2px] font-semibold"
                      style={{ background: commit.color }}
                    >
                      {commit.tag}
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div
                className="pl-5 transition-colors duration-200"
                style={{
                  borderLeft: isOpen
                    ? `2px solid ${c.color}`
                    : "2px solid rgba(255,255,255,0.06)",
                  paddingBottom: isOpen ? "0" : "2rem",
                }}
              >
                <div className="font-display text-[1.35rem] text-[var(--foreground)] leading-[1.2] mb-[2px]">
                  {commit.title}
                </div>
                <div
                  className="font-sans text-[13px] mb-[2px]"
                  style={{ color: commit.color }}
                >
                  {commit.company}
                </div>
                <div className="font-mono text-[11px] text-[var(--muted-foreground)] tracking-[0.06em]">
                  {commit.date}
                </div>

                {/* Expandable */}
                <div
                  className="overflow-hidden transition-all duration-400 ease-out"
                  style={{ maxHeight: isOpen ? "600px" : "0" }}
                >
                  <div className="pt-6 pb-8">
                    {commit.items.map((item, i) => (
                      <CommitLine key={i} text={item} color={commit.color} />
                    ))}
                    <div className="flex flex-wrap gap-[6px] mt-4">
                      {commit.stack.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] tracking-[0.06em] text-[var(--muted-foreground)] bg-[var(--secondary)] px-2 py-[3px] border border-[var(--border)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div
                className="font-mono text-[16px] opacity-60 transition-transform duration-300 self-start mt-[2px]"
                style={{
                  color: commit.color,
                  transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                }}
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
