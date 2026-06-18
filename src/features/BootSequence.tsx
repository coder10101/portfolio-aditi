import { useEffect, useState } from "react";

const colors = ["var(--danger)", "var(--warning)", "var(--success)"];

const lines = [
  { text: "$ initializing portfolio v2026.1.0", delay: 0 },
  { text: "→ loading engineer profile...", delay: 300 },
  { text: "→ parsing 7 years of experience", delay: 600 },
  { text: "→ compiling React ✓", delay: 900 },
  { text: "→ compiling React Native (iOS + Android) ✓", delay: 1150 },
  { text: "→ compiling Node.js, PostgreSQL ✓", delay: 1400 },
  { text: "→ injecting MBA business acumen ✓", delay: 1650 },
  { text: "→ bundling leadership modules...", delay: 1900 },
  { text: "✓ build successful (0 errors, 0 warnings)", delay: 2200 },
  { text: "$ launching aditiacharya.dev", delay: 2500 },
];

type Props = {
  onComplete: () => void;
};

export function BootSequence({ onComplete }: Props) {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    lines.forEach((line, i) => {
      const t = setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);

        if (i === lines.length - 1) {
          const end1 = setTimeout(() => setDone(true), 400);
          const end2 = setTimeout(() => onComplete(), 800);

          timers.push(end1, end2);
        }
      }, line.delay);

      timers.push(t);
    });

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0e] transition-opacity duration-500"
      style={{
        opacity: done ? 0 : 1,
        pointerEvents: done ? "none" : "all",
      }}
    >
      <div className="w-[min(600px,90vw)]">
        <div className="flex items-center gap-2 rounded-t-md border border-white/10 border-b-0bg-[var(--surface-elevated)] px-4 py-2">
          {colors.map((c, i) => (
            <div
              key={i}
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: c }}
            />
          ))}

          <span className="ml-2 font-mono text-xs text-white/30">
            aditiacharya — portfolio — -zsh
          </span>
        </div>

        <div className="min-h-[260px] rounded-b-md border border-[var(--border)] bg-[var(--surface)] p-6">
          {lines.map((line, i) => {
            const visible = visibleLines.includes(i);

            return (
              <div
                key={i}
                className="font-mono text-[13px] leading-relaxed transition-all duration-300"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(6px)",
                  color: line.text.startsWith("✓")
                    ? "var(--primary)"
                    : line.text.startsWith("$")
                      ? "var(--text)"
                      : "var(--muted)",
                }}
              >
                {line.text}

                {i === visibleLines[visibleLines.length - 1] &&
                  i < lines.length - 1 && (
                    <span className="ml-1 inline-block h-3 w-2 animate-pulse bg-[var(--primary)]" />
                  )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
