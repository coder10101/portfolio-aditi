import { CODEEDITORBOTTOMINFO, CODESNIPPETS, STATS } from "../../consts";
import { useTypewriter } from "../../hooks/useTypewriter";
import { CodeLine } from "./CodeLine";

export function CodeEditorSection() {
  const lines = CODESNIPPETS.split("\n");
  const startIndex = 6;
  const staticLines = lines.slice(0, startIndex);
  const animatedText = lines.slice(startIndex).join("\n");
  const { value } = useTypewriter(animatedText);

  return (
    <div className="flex flex-col justify-center px-12 py-24 bg-[var(--card)] max-md:px-8 max-md:py-12">
      {/* Editor window */}
      <div className="bg-[#0f0f14] border border-white/[0.08] rounded-[4px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
        {/* Tabs */}
        <div className="flex bg-[#1a1a22] border-b border-white/[0.06]">
          <div className="flex items-center gap-2 px-5 py-[10px] font-mono text-[12px] text-white/70 bg-[#0f0f14] border-b-2 border-[var(--primary)]">
            <span className="w-2 h-2 rounded-[2px] bg-[var(--primary)] opacity-90" />
            engineer.ts
          </div>
          <div className="flex items-center gap-2 px-5 py-[10px] font-mono text-[12px] text-white/30">
            <span className="w-2 h-2 rounded-[2px] bg-white/15" />
            resume.pdf
          </div>
        </div>

        {/* Code area */}
        <div className="grid grid-cols-[28px_1fr] gap-4 p-6 min-h-[300px]">
          {/* Line numbers */}
          <div className="text-right select-none text-white/15 text-[13px] leading-[1.7] font-mono">
            {lines.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

          {/* Code */}
          <div className="m-0 whitespace-pre overflow-hidden font-mono text-[13px] leading-[1.7] text-white/70">
            {staticLines.map((line, i) => (
              <div key={`static-${i}`}>
                <CodeLine line={line} />
              </div>
            ))}
            {value.split("\n").map((line, i) => (
              <div key={`anim-${i}`}>
                <CodeLine line={line} />
              </div>
            ))}
            <span className="inline-block ml-[2px] text-[var(--primary)] animate-[blink_1s_step-end_infinite]">
              ▍
            </span>
          </div>
        </div>

        {/* Status bar */}
        <div className="bg-[var(--primary)] px-4 py-1 flex gap-4 font-mono text-[11px] text-[var(--card)]">
          {CODEEDITORBOTTOMINFO.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-3 gap-[1px] border border-[var(--border)] bg-[var(--border)]">
        {STATS.map((stat) => (
          <div key={stat.l} className="bg-[var(--background)] p-4 text-center">
            <div className="font-serif text-[1.4rem] italic">{stat.v}</div>
            <div className="mt-[2px] font-mono text-[9px] tracking-[0.1em] text-[var(--muted-foreground)]">
              {stat.l.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
