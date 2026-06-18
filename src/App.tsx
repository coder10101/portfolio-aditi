import { useState, useCallback } from "react";
import { BootSequence } from "./features/BootSequence";

export default function App() {
  const [booted, setBooted] = useState(false);

  const handleBootComplete = useCallback(() => {
    setBooted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans overflow-x-hidden">
      {!booted && <BootSequence onComplete={handleBootComplete} />}

      {/* NAV */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 h-14
          flex items-center justify-between px-8
          border-b border-[var(--border)]
          bg-[rgba(10,10,14,0.85)] backdrop-blur-md
          transition-all duration-500
          ${booted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}
        `}
      >
        <span className="font-mono text-[13px] tracking-[0.1em] text-[var(--primary)]">
          AA.
        </span>
      </nav>

      {/* MAIN SECTIONS */}
      {booted && (
        <main className="pt-14 transition-opacity duration-700 opacity-100">
          <h1 className="text-5xl font-bold m-0">Main Section</h1>
          <footer>
            <span>© 2026 Aditi Acharya</span>
            <span>Built with React · TypeScript · Tailwind</span>
          </footer>
        </main>
      )}
    </div>
  );
}
