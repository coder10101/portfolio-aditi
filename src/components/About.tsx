import { AboutSection } from "./AboutSection";

export function About() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
      className="hero-grid"
    >
      <AboutSection />
    </section>
  );
}
