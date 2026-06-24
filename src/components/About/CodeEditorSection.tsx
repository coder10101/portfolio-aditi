import { CODEEDITORBOTTOMINFO, CODESNIPPETS, STATS } from "../../consts";
import { useTypewriter } from "../../hooks/useTypewriter";
import "../../assets/styles/about.css";

export function CodeEditorSection() {
  const { value, done } = useTypewriter(CODESNIPPETS);

  const lines = value.split("\n");

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

          <pre className="editor-code">
            {value}
            {!done && <span className="cursor" />}
          </pre>
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
