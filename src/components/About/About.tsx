import { AboutSection } from "./AboutSection";
import { CodeEditorSection } from "./CodeEditorSection";

export function About() {
  return (
    <section
      id="about"
      className="min-h-screen grid grid-cols-2 max-md:grid-cols-1"
    >
      <AboutSection />
      <CodeEditorSection />
    </section>
  );
}
