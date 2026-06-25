import { AWARDS, DEGREES } from "../../consts";
import { SectionLabel } from "../SectionLabel";

export function Education() {
  return (
    <section id="education" className="px-8 py-[100px] max-w-[1200px] mx-auto">
      <SectionLabel index="04" title="Education" />

      <p className="font-mono text-[12px] text-[var(--muted-foreground)] mt-4 mb-12 tracking-[0.06em]">
        $ cat ./credentials.json
      </p>

      {/* Degree cards */}
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-[1px] bg-[var(--border)] border border-[var(--border)] mb-12">
        {DEGREES.map((ed) => (
          <div
            key={ed.abbr}
            className="relative overflow-hidden p-10 bg-[var(--background)] hover:bg-[var(--card)] transition-colors duration-200"
          >
            {/* Watermark */}
            <div className="absolute top-1/2 -translate-y-1/2 right-[-10px] font-serif text-[10rem] italic leading-none select-none pointer-events-none text-[rgba(200,245,66,0.04)]">
              {ed.abbr}
            </div>

            {/* Body */}
            <div className="relative z-10">
              <div className="font-mono text-[11px] tracking-[0.12em] text-[var(--primary)] mb-3">
                {ed.year}
              </div>
              <h3 className="font-serif text-[1.75rem] text-[var(--foreground)] m-0 mb-[6px] leading-[1.1]">
                {ed.abbr}
                <span className="italic"> ·</span>
              </h3>
              <p className="font-sans text-[13px] text-[var(--muted-foreground)] m-0 mb-1 font-normal">
                {ed.full}
              </p>
              <p className="font-mono text-[11px] text-[var(--muted-foreground)] m-0 mb-5 tracking-[0.04em] opacity-60">
                {ed.institution}
              </p>
              <p className="font-sans text-[13px] leading-[1.65] text-[var(--muted-foreground)] m-0 font-light max-w-[320px]">
                {ed.note}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Awards table */}
      <div className="border border-[var(--border)]">
        <div className="font-mono text-[11px] tracking-[0.1em] text-[var(--muted-foreground)] px-5 py-3 border-b border-[var(--border)] bg-[var(--card)] flex gap-3 items-center">
          <span className="text-[var(--primary)]">$</span> cat ./awards.md
        </div>

        {AWARDS.map((award, i) => (
          <div
            key={i}
            className="grid grid-cols-[220px_1fr] max-md:grid-cols-1 hover:bg-[var(--card)] transition-colors duration-150 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-[var(--border)]"
          >
            <div className="px-8 py-6 border-r border-[var(--border)] max-md:border-r-0 max-md:border-b">
              <div className="font-mono text-[10px] tracking-[0.1em] text-[var(--primary)] mb-1">
                {award.org.toUpperCase()}
              </div>
              <div className="font-sans text-[13px] font-medium text-[var(--foreground)] leading-[1.4]">
                {award.role}
              </div>
            </div>
            <div className="px-8 py-6 flex items-center">
              <p className="font-sans text-[13px] leading-[1.65] text-[var(--muted-foreground)] m-0 font-light">
                {award.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
