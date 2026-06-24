import { CODEEDITORBOTTOMINFO, CODESNIPPETS, STATS } from "../../consts";
import { useTypewriter } from "../../hooks/useTypewriter";
import "../../assets/styles/about.css";
import { CodeLine } from "./CodeLine";

export function CodeEditorSection() {
  const lines = CODESNIPPETS.split("\n");
  const startIndex = 6;
  const staticLines = lines.slice(0, startIndex);
  const animatedText = lines.slice(startIndex).join("\n");
  const { value, done } = useTypewriter(animatedText);

  return (
    <div className="code-editor-section">
      <div className="editor-window">
        <div className="editor-tabs">
          <div className="editor-tab editor-tab--active">engineer.ts</div>
          <div className="editor-tab">resume.pdf</div>
        </div>

        <div className="editor-content">
          <div className="editor-line-numbers">
            {lines.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <div className="editor-code">
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
            <span className="cursor">▍</span>
          </div>
        </div>

        <div className="editor-status">
          {CODEEDITORBOTTOMINFO.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="stats-grid">
        {STATS.map((stat) => (
          <div key={stat.l} className="stat-card">
            <div className="stat-value">{stat.v}</div>
            <div className="stat-label">{stat.l.toUpperCase()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
