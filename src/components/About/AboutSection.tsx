export function AboutSection() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "6rem 4rem",
        borderRight: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(200,245,66,0.07) 1px, transparent 0)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            letterSpacing: "0.12em",
            color: "var(--primary)",
            marginBottom: "2.5rem",
            padding: "5px 12px",
            border: "1px solid var(--primary)",
            background: "rgba(200,245,66,0.05)",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--primary)",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          AVAILABLE FOR WORK
        </div>

        <h1
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(3rem, 6vw, 5.5rem)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            color: "var(--foreground)",
            margin: "0 0 1rem",
          }}
        >
          Aditi <br />
          <span style={{ fontStyle: "italic", color: "var(--primary)" }}>
            Acharya
          </span>
        </h1>

        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "13px",
            color: "var(--muted-foreground)",
            letterSpacing: "0.06em",
            marginBottom: "2rem",
          }}
        >
          Senior Software Engineer · 7+ yrs
        </div>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "15px",
            lineHeight: 1.75,
            color: "var(--muted-foreground)",
            fontWeight: 300,
            margin: "0 0 3rem",
            maxWidth: "420px",
          }}
        >
          Frontend engineer specializing in React and React Native, with a
          strong foundation in JavaScript and TypeScript. Experienced in
          delivering production-ready web and mobile applications that
          prioritize user experience and business impact.
        </p>

        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <a
            href="mailto:aditiacharya2@gmail.com"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "12px",
              letterSpacing: "0.08em",
              color: "#0a0a0e",
              background: "var(--primary)",
              padding: "13px 28px",
              textDecoration: "none",
              transition: "transform 0.15s, box-shadow 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(200,245,66,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
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
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "12px",
                letterSpacing: "0.08em",
                color: "var(--muted-foreground)",
                border: "1px solid var(--border)",
                padding: "13px 24px",
                textDecoration: "none",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--primary)";
                e.currentTarget.style.borderColor = "var(--primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--muted-foreground)";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              {l.label.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
