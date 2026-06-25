interface SectionLabelProps {
  index: string;
  title: string;
}

export function SectionLabel({ index, title }: SectionLabelProps) {
  return (
    <div className="flex items-baseline gap-6">
      <span className="font-mono text-[11px] tracking-[0.12em] text-[var(--primary)]">
        {index}
      </span>
      <h2
        className="text-[clamp(2rem,4vw,3rem)] text-[var(--foreground)] m-0 leading-none"
        style={{ fontFamily: "'DM Serif Display', serif" }}
      >
        {title}
      </h2>
    </div>
  );
}
