export function AboutSection() {
  return (
    <div className="relative flex flex-col justify-center px-16 py-24 border-r border-[var(--border)] overflow-hidden max-md:px-8 max-md:py-12 max-md:border-r-0 max-md:border-b">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(200,245,66,0.07) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] text-[var(--primary)] mb-10 px-3 py-[5px] border border-[var(--primary)] bg-[rgba(200,245,66,0.05)]">
          <span className="w-[6px] h-[6px] rounded-full bg-[var(--primary)] animate-pulse" />
          AVAILABLE FOR WORK
        </div>

        {/* Name */}
        <h1 className="font-serif text-[clamp(3rem,6vw,5.5rem)] leading-none tracking-[-0.02em] text-[var(--foreground)] m-0 mb-4">
          Aditi <br />
          <span className="italic text-[var(--primary)]">Acharya</span>
        </h1>

        {/* Title */}
        <div className="font-mono text-[13px] text-[var(--muted-foreground)] tracking-[0.06em] mb-8">
          Senior Software Engineer · 7+ yrs
        </div>

        {/* Bio */}
        <p className="font-sans text-[15px] leading-[1.75] text-[var(--muted-foreground)] font-light m-0 mb-12 max-w-[420px]">
          Frontend engineer specializing in React and React Native, with a
          strong foundation in JavaScript and TypeScript. Experienced in
          delivering production-ready web and mobile applications that
          prioritize user experience and business impact.
        </p>

        {/* CTAs */}
        <div className="flex gap-3 flex-wrap">
          <a
            href="mailto:aditiacharya2@gmail.com"
            className="font-mono text-[12px] tracking-[0.08em] text-[#0a0a0e] bg-[var(--primary)] px-7 py-[13px] no-underline transition-transform duration-150 hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(200,245,66,0.25)]"
          >
            HIRE ME
          </a>

          {[
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/aditi-acharya-a56ab4a7/",
            },
            { label: "GitHub", href: "https://github.com/coder10101" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[12px] tracking-[0.08em] text-[var(--muted-foreground)] border border-[var(--border)] px-6 py-[13px] no-underline transition-colors duration-200 hover:text-[var(--primary)] hover:border-[var(--primary)]"
            >
              {l.label.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
