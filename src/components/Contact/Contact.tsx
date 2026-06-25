import { useState } from "react";
import { SectionLabel } from "../SectionLabel";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("aditiacharya2@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    {
      label: "email",
      value: "aditiacharya2@gmail.com",
      action: copyEmail,
      actionLabel: copied ? "✓ copied" : "copy →",
    },
    {
      label: "linkedin",
      value: "aditiacharya-a56ab4a7",
      action: () =>
        window.open(
          "https://www.linkedin.com/in/aditi-acharya-a56ab4a7/",
          "_blank",
        ),
      actionLabel: "open →",
    },
    {
      label: "portfolio",
      value: "coder10101",
      action: () => window.open("https://github.com/coder10101", "_blank"),
      actionLabel: "open →",
    },
  ];

  const statusItems = [
    { key: "availability", value: "open to opportunities", highlight: true },
    {
      key: "preference",
      value: "Senior / Full Stack Engineer",
      highlight: false,
    },
    { key: "location", value: "remote · hybrid · on-site", highlight: false },
    { key: "notice_period", value: "available to discuss", highlight: false },
  ];

  return (
    <section
      id="contact"
      className="px-8 pt-[100px] pb-[120px] max-w-[1200px] mx-auto"
    >
      <SectionLabel index="05" title="Contact" />

      <p className="font-mono text-[12px] text-[var(--muted-foreground)] mt-4 mb-12 tracking-[0.06em]">
        $ curl -X POST /api/hire --data "candidate=aditiacharya"
      </p>

      <div className="grid grid-cols-2 max-md:grid-cols-1 border border-[var(--border)]">
        {/* Left: status */}
        <div className="p-12 border-r border-[var(--border)] max-md:border-r-0 max-md:border-b bg-[var(--card)]">
          <div className="font-mono text-[11px] tracking-[0.1em] text-[var(--muted-foreground)] mb-6">
            STATUS
          </div>

          <div className="flex flex-col gap-4">
            {statusItems.map((item) => (
              <div key={item.key} className="flex gap-4 items-baseline">
                <span className="font-mono text-[12px] text-[var(--muted-foreground)] min-w-[120px] tracking-[0.04em]">
                  {item.key}:
                </span>
                <span
                  className="font-mono text-[12px] tracking-[0.04em]"
                  style={{
                    color: item.highlight ? "#c8f542" : "var(--foreground)",
                  }}
                >
                  "{item.value}"
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 font-display text-[2rem] text-[var(--foreground)] leading-[1.2]">
            Let's build
            <br />
            <span className="italic text-[var(--primary)]">
              something great.
            </span>
          </div>
        </div>

        {/* Right: links */}
        <div className="bg-[var(--background)]">
          {links.map((link) => (
            <div
              key={link.label}
              onClick={link.action}
              className="grid grid-cols-[80px_1fr_auto] gap-4 items-center px-10 py-8 border-b border-[var(--border)] cursor-pointer transition-colors duration-150 hover:bg-[var(--card)]"
            >
              <span className="font-mono text-[11px] tracking-[0.1em] text-[var(--muted-foreground)]">
                {link.label}
              </span>
              <span className="font-sans text-[14px] text-[var(--foreground)] overflow-hidden text-ellipsis whitespace-nowrap">
                {link.value}
              </span>
              <span className="font-mono text-[11px] text-[var(--primary)] tracking-[0.06em] whitespace-nowrap">
                {link.actionLabel}
              </span>
            </div>
          ))}
          <a
            href="mailto:aditiacharya2@gmail.com"
            className="flex items-center justify-between px-10 py-8 bg-[var(--primary)] no-underline hover:opacity-90 transition-opacity duration-200"
          >
            <span className="font-mono text-[13px] tracking-[0.08em] text-[#0a0a0e]">
              START A CONVERSATION
            </span>
            <span className="font-serif text-[2rem] text-[#0a0a0e] italic leading-none">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
