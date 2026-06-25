import { useState, useEffect } from "react";

const sections = [
  { id: "about", short: "INIT" },
  { id: "experience", short: "EXP" },
  { id: "skills", short: "STACK" },
  { id: "education", short: "EDU" },
  { id: "contact", short: "CONTACT" },
];

export function SideNav({ booted }: { booted: boolean }) {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4 },
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <div
      className={`fixed left-6 top-1/3 -translate-y-1/3 z-50 flex flex-col gap-0 max-[1100px]:hidden   ${booted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}`}
    >
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() =>
            document
              .getElementById(s.id)
              ?.scrollIntoView({ behavior: "smooth" })
          }
          title={s.id}
          className="flex items-center gap-2 py-[6px] bg-transparent border-none cursor-pointer"
        >
          <div
            className="h-[2px] shrink-0 transition-all duration-300"
            style={{
              width: active === s.id ? "24px" : "8px",
              background:
                active === s.id ? "var(--primary)" : "rgba(255,255,255,0.2)",
            }}
          />
          <span
            className="font-mono text-[9px] tracking-[0.12em] whitespace-nowrap transition-colors duration-300"
            style={{
              color: active === s.id ? "var(--primary)" : "transparent",
            }}
          >
            {s.short}
          </span>
        </button>
      ))}
    </div>
  );
}
