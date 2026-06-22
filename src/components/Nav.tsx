import { LINKS } from "../consts";

type NavProps = {
  booted: boolean;
};

export function Nav({ booted }: NavProps) {
  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500
        ${booted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}
      `}
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
                onClick={() => {}}
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
        </ul>
      </div>
    </nav>
  );
}
