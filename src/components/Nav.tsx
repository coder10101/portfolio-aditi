import { useEffect, useState } from "react";
import { LINKS } from "../consts";

type NavProps = {
  booted: boolean;
};

export function Nav({ booted }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (link: string) => {
    const el = document.getElementById(link.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500
        ${booted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}
      `}
      style={{
        background: scrolled ? "var(--background)" : "transparent",
        borderBottom: "1px solid transparent",
        borderColor: scrolled ? "var(--border)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "all 0.5s ease",
      }}
    >
      <div className="mx-auto flex h-16 items-center justify-between px-8">
        <span
          className="font-mono text-[13px] tracking-[0.1em]"
          style={{ color: "var(--primary)" }}
        >
          AA.
        </span>

        <ul className="hidden list-none items-center gap-10 md:flex">
          {LINKS.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollToSection(link)}
                className="font-mono text-xs tracking-[0.08em] transition-colors"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--muted-foreground)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--muted-foreground)";
                }}
              >
                {link.toUpperCase()}
              </button>
            </li>
          ))}
          <li>
            <a
              href="mailto:aditiacharya2@gmail.com"
              className="font-mono text-[11px] tracking-[0.1em] text-[#0a0a0e] bg-[var(--primary)] px-4 py-[7px] no-underline transition-opacity duration-200 hover:opacity-85"
            >
              HIRE
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
