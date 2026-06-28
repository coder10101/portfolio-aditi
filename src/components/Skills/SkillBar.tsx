import { useState } from "react";

interface Skill {
  name: string;
  level: number;
  note: string;
}

export function SkillBar({
  skill,
  index,
  compiled,
}: {
  skill: Skill;
  index: number;
  compiled: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="mb-5"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Header */}
      <div className="flex justify-between items-baseline mb-[6px]">
        <span className="font-sans text-[13px] font-medium text-[var(--foreground)]">
          {skill.name}
        </span>
        <span
          className="font-mono text-[11px] text-[var(--primary)] transition-opacity duration-300"
          style={{
            opacity: compiled ? 1 : 0,
            transitionDelay: `${index * 0.15 + 0.2}s`,
          }}
        >
          {skill.level}%
        </span>
      </div>

      {/* Track */}
      <div className="h-[4px] bg-[var(--secondary)] relative overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full transition-[width] duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            width: compiled ? `${skill.level}%` : "0%",
            background:
              "linear-gradient(to right, var(--primary), rgba(66,245,215,0.5))",
            transitionDelay: `${index * 0.15}s`,
          }}
        />
      </div>

      {/* Note */}
      <div
        className="font-mono text-[11px] text-[var(--muted-foreground)] tracking-[0.04em] mt-[5px] overflow-hidden transition-all duration-200"
        style={{
          maxHeight: hovered ? "30px" : "0",
          opacity: hovered ? 1 : 0,
        }}
      >
        // {skill.note}
      </div>
    </div>
  );
}
