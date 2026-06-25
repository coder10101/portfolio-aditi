import { TYPECOLORS } from "../../consts";

export default function CommitLine({
  text,
  color,
}: {
  text: string;
  color: string;
}) {
  const colonIdx = text.indexOf(": ");
  const type = colonIdx > -1 ? text.slice(0, colonIdx) : text;
  const msg = colonIdx > -1 ? text.slice(colonIdx + 2) : "";

  return (
    <div className="flex gap-[10px] font-mono text-[12.5px] leading-[1.8]">
      <span
        className="min-w-[52px] shrink-0"
        style={{ color: TYPECOLORS[type] ?? color }}
      >
        {type}:
      </span>
      <span className="text-white/55">{msg}</span>
    </div>
  );
}
