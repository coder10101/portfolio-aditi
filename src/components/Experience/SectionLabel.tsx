import "../../assets/styles/sectionLabel.css";

interface SectionLabelProps {
  index: string;
  title: string;
}

export function SectionLabel({ index, title }: SectionLabelProps) {
  return (
    <div className="section-label">
      <span className="section-label__index">{index}</span>
      <h2 className="section-label__title">{title}</h2>
    </div>
  );
}
