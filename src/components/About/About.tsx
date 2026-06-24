import { AboutSection } from "./AboutSection";
import { CodeEditorSection } from "./CodeEditorSection";

export function About() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      <AboutSection />
      <CodeEditorSection />
    </section>
  );
}
