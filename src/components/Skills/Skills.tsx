import { useEffect, useRef, useState } from "react";
import "../../assets/styles/skills.css";
import { SectionLabel } from "../SectionLabel";

const skillGroups = [
  {
    label: "Frontend",
    skills: [
      {
        name: "ReactJS",
        level: 95,
        note: "Hooks, performance optimisation, legacy codebases",
      },
      {
        name: "React Native",
        level: 90,
        note: "iOS + Android, full App Store lifecycle",
      },
      {
        name: "TailwindCSS",
        level: 90,
        note: "Responsive design, design systems",
      },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", level: 85, note: "REST APIs, JWT/Passport auth" },
      {
        name: "Ruby on Rails",
        level: 70,
        note: "Hotwire Stimulus, admin panels, API design",
      },
      { name: "Redis", level: 78, note: "OTP storage, session management" },
    ],
  },
  {
    label: "Database & Cloud",
    skills: [
      {
        name: "PostgreSQL / MySQL",
        level: 86,
        note: "Schema design, query optimisation",
      },
      { name: "AWS S3", level: 80, note: "Multi-environment image uploads" },
      {
        name: "GitHub Actions",
        level: 90,
        note: "CI/CD pipeline design and maintenance",
      },
      { name: "Firebase", level: 75, note: "FCM push notifications" },
    ],
  },
];

const alsoTags = [
  "Agile/Scrum",
  "Sanity CMS",
  "Typesense",
  "Storybook",
  "Technical Mentorship",
  "App Store Releases",
  "Cross-functional Leadership",
  "MBA",
];

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

  const group = skillGroups[activeGroup];

  return (
    <section className="skills-section" id="skills" ref={ref}>
      <SectionLabel index="03" title="Stack" />

      <p className="skills-git-command">$ npm run compile --stack</p>

      <div className="skills-grid">
        {/* Sidebar */}
        <div className="skills-sidebar">
          <div className="skills-sidebar__heading">MODULES</div>
          {skillGroups.map((g, i) => (
            <button
              key={g.label}
              className={`skills-sidebar__btn ${activeGroup === i ? "active" : ""}`}
              onClick={() => setActiveGroup(i)}
            >
              <span className="skills-sidebar__dot" />
              <span className="skills-sidebar__label">{g.label}</span>
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
        {alsoTags.map((t) => (
          <span key={t} className="skills-also__tag">
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
