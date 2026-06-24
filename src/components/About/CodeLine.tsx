import React from "react";

interface CodeLineProps {
  line: string;
}

const PROPERTY_NAMES = [
  "name",
  "role",
  "platforms",
  "stack",
  "db",
  "cloud",
  "superpower",
];

export function CodeLine({ line }: CodeLineProps) {
  if (line.startsWith("//")) {
    return <span className="token-comment">{line}</span>;
  }

  const tokens = line.split(
    /(\bconst\b|\blet\b|\bvar\b|"[^"]*"|\b(?:name|role|platforms|stack|db|cloud|superpower)\b(?=:)|[[\]{},])/g,
  );

  return (
    <>
      {tokens.map((token, index) => {
        if (!token) return null;

        if (["const", "let", "var"].includes(token)) {
          return (
            <span key={index} className="token-keyword">
              {token}
            </span>
          );
        }

        if (/^"[^"]*"$/.test(token)) {
          return (
            <span key={index} className="token-string">
              {token}
            </span>
          );
        }

        if (PROPERTY_NAMES.includes(token)) {
          return (
            <span key={index} className="token-property">
              {token}
            </span>
          );
        }

        if (/^[\[\]{}.,]$/.test(token)) {
          return (
            <span key={index} className="token-punctuation">
              {token}
            </span>
          );
        }

        return <React.Fragment key={index}>{token}</React.Fragment>;
      })}
    </>
  );
}
