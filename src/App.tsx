import { useState } from "react";
import { BootSequence } from "./features/BootSequence";

export default function App() {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <>
      {!bootComplete && (
        <BootSequence onComplete={() => setBootComplete(true)} />
      )}

      {bootComplete && (
        <main className="min-h-screen bg-background text-foreground font-sans">
          <div className="max-w-5xl mx-auto px-6 py-10">
            <h1 className="text-4xl font-bold">Hi, I’m Aditi 👋</h1>

            <p className="mt-4 text-muted-foreground">
              Portfolio loaded successfully.
            </p>
          </div>
        </main>
      )}
    </>
  );
}
