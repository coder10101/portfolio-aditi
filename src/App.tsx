import { useState, useCallback } from "react";
import { BootSequence } from "./features/BootSequence";
import { Nav } from "./components/Nav";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Skills } from "./components/Skills/Skills";
import { Education } from "./components/Education/Education";
import { Contact } from "./components/Contact/Contact";

export default function App() {
  const [booted, setBooted] = useState(false);

  const handleBootComplete = useCallback(() => {
    setBooted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden">
      {!booted && <BootSequence onComplete={handleBootComplete} />}

      <Nav booted={booted} />

      <main
        className={`pt-14 transition-opacity duration-700 ${booted ? "opacity-100" : "opacity-0"}`}
      >
        <About />

        <div className="border-t border-[var(--border)] bg-[var(--card)]">
          <Experience />
        </div>

        <div className="border-t border-[var(--border)]">
          <Skills />
        </div>

        <div className="border-t border-[var(--border)] bg-[var(--card)]">
          <Education />
        </div>

        <div className="border-t border-[var(--border)]">
          <Contact />
        </div>

        <footer className="border-t border-[var(--border)] px-8 py-8 flex justify-between items-center max-md:flex-col max-md:gap-2 max-md:text-center">
          <span className="font-mono text-[11px] text-[var(--muted-foreground)] tracking-wider">
            © 2026 Aditi Acharya
          </span>
          <span className="font-mono text-[11px] text-[var(--muted-foreground)] tracking-wider">
            Built with React · TypeScript · Tailwind
          </span>
        </footer>
      </main>
    </div>
  );
}
