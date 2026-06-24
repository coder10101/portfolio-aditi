import { useState, useCallback } from "react";
import { BootSequence } from "./features/BootSequence";
import { Nav } from "./components/Nav";
import { About } from "./components/About/About";

export default function App() {
  const [booted, setBooted] = useState(false);

  const handleBootComplete = useCallback(() => {
    setBooted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans overflow-x-hidden">
      {!booted && <BootSequence onComplete={handleBootComplete} />}

      {/* NAV */}
      <Nav booted={booted} />
      {/* MAIN SECTIONS */}
      {booted && (
        <main className="pt-14 transition-opacity duration-700 opacity-100">
          <About />
          <footer>
            <span>© 2026 Aditi Acharya</span>
            <span>Built with React · TypeScript · Tailwind</span>
          </footer>
        </main>
      )}
    </div>
  );
}
