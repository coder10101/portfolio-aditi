export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-8 py-8 flex justify-between items-center max-md:flex-col max-md:gap-2 max-md:text-center">
      <span className="font-mono text-[11px] text-[var(--muted-foreground)] tracking-wider">
        © 2026 Aditi Acharya
      </span>
      <span className="font-mono text-[11px] text-[var(--muted-foreground)] tracking-wider">
        Built with React · TypeScript · Tailwind
      </span>
    </footer>
  );
}
