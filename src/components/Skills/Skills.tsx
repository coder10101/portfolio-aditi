import { useEffect, useRef, useState } from "react";
import "../../assets/styles/skills.css";
import { SectionLabel } from "../SectionLabel";
import { ADDITIONALTAGS, SKILLGROUPS } from "../../consts";

interface Skill {
  name: string;
  level: number;
  note: string;
}

function SkillBar({
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
      className="skill-bar"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="skill-bar__header">
        <span className="skill-bar__name">{skill.name}</span>
        <span
          className={`skill-bar__level ${compiled ? "visible" : ""}`}
          style={{ transitionDelay: `${index * 0.15 + 0.2}s` }}
        >
          {skill.level}%
        </span>
      </div>

      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{
            width: compiled ? `${skill.level}%` : "0%",
            transitionDelay: `${index * 0.15}s`,
          }}
        />
      </div>

      <div className={`skill-bar__note ${hovered ? "visible" : ""}`}>
        // {skill.note}
      </div>
    </div>
  );
}

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
    <section className="skills-section" id="skills" ref={ref}>
      <SectionLabel index="03" title="Stack" />

      <p className="skills-git-command">$ npm run compile --stack</p>

      <div className="skills-grid">
        {/* Sidebar */}
        <div className="skills-sidebar">
          <div className="skills-sidebar__heading">MODULES</div>
          {SKILLGROUPS.map((group, i) => (
            <button
              key={group.label}
              className={`skills-sidebar__btn ${activeGroup === i ? "active" : ""}`}
              onClick={() => setActiveGroup(i)}
            >
              <span className="skills-sidebar__dot" />
              <span className="skills-sidebar__label">{group.label}</span>
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="skills-panel">
          <div className="skills-panel__status">
            compiling {group.label.toLowerCase()}... {compiled ? "✓ done" : "⠋"}
          </div>
          {group.skills.map((s, i) => (
            <SkillBar key={s.name} skill={s} index={i} compiled={compiled} />
          ))}
        </div>
      </div>

      {/* Also section */}
      <div className="skills-also">
        <span className="skills-also__label">ALSO:</span>
        {ADDITIONALTAGS.map((tag) => (
          <span key={tag} className="skills-also__tag">
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
