import { useEffect, useRef, useState } from "react";
import { ADDITIONALTAGS, SKILLGROUPS } from "../../consts";
import { SectionLabel } from "../SectionLabel";
import { SkillBar } from "./SkillBar";

export function Skills() {
  const [compiled, setCompiled] = useState(false);
  const [activeGroup, setActiveGroup] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCompiled(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const group = SKILLGROUPS[activeGroup];

  return (
    <section
      id="skills"
      className="px-8 py-[100px] max-w-[1200px] mx-auto"
      ref={ref}
    >
      <SectionLabel index="03" title="Stack" />

      <p className="font-mono text-[12px] text-[var(--muted-foreground)] mt-4 mb-12 tracking-[0.06em]">
        $ npm run compile --stack
      </p>

      {/* Grid */}
      <div className="grid grid-cols-[180px_1fr] max-md:grid-cols-1 border border-[var(--border)]">
        {/* Sidebar */}
        <div className="border-r border-[var(--border)] max-md:border-r-0 max-md:border-b max-md:flex max-md:overflow-x-auto">
          <div className="font-mono text-[10px] tracking-[0.1em] text-[var(--muted-foreground)] px-4 py-[14px] border-b border-[var(--border)]">
            MODULES
          </div>
          {SKILLGROUPS.map((g, i) => (
            <button
              key={g.label}
              onClick={() => setActiveGroup(i)}
              className="flex items-center gap-[10px] w-full text-left border-b border-[var(--border)] px-4 py-[14px] cursor-pointer transition-all duration-200"
              style={{
                background:
                  activeGroup === i ? "var(--secondary)" : "transparent",
                borderLeft:
                  activeGroup === i
                    ? "2px solid var(--primary)"
                    : "2px solid transparent",
              }}
            >
              <span
                className="w-[6px] h-[6px] rounded-full shrink-0"
                style={{
                  background:
                    activeGroup === i
                      ? "var(--primary)"
                      : "var(--muted-foreground)",
                }}
              />
              <span
                className="font-mono text-[12px] tracking-[0.04em]"
                style={{
                  color:
                    activeGroup === i
                      ? "var(--foreground)"
                      : "var(--muted-foreground)",
                }}
              >
                {g.label}
              </span>
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="p-7">
          <div className="font-mono text-[11px] text-[var(--muted-foreground)] mb-6 pb-4 border-b border-[var(--border)] tracking-[0.06em]">
            compiling {group.label.toLowerCase()}... {compiled ? "✓ done" : "⠋"}
          </div>
          {group.skills.map((s, i) => (
            <SkillBar key={s.name} skill={s} index={i} compiled={compiled} />
          ))}
        </div>
      </div>

      {/* Also */}
      <div className="mt-8 px-8 py-6 border border-[var(--border)] bg-[var(--card)] flex flex-wrap gap-[10px] items-center">
        <span className="font-mono text-[10px] tracking-[0.1em] text-[var(--muted-foreground)] mr-2">
          ALSO:
        </span>
        {ADDITIONALTAGS.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[11px] tracking-[0.04em] text-[var(--foreground)] bg-[var(--secondary)] px-3 py-[5px] border border-[var(--border)] cursor-default transition-colors duration-200 hover:border-[var(--primary)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
