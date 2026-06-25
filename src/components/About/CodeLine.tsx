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

const styles = {
  comment: { color: "#5a6a3a" },
  string: { color: "#c8f542" },
  keyword: { color: "#cf8aff" },
  property: { color: "#7dc4f5" },
};

export function CodeLine({ line }: CodeLineProps) {
  if (line.startsWith("//")) {
    return <span style={styles.comment}>{line}</span>;
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
            <span key={index} style={styles.keyword}>
              {token}
            </span>
          );
        }

        if (/^"[^"]*"$/.test(token)) {
          return (
            <span key={index} style={styles.string}>
              {token}
            </span>
          );
        }

        if (PROPERTY_NAMES.includes(token)) {
          return (
            <span key={index} style={styles.property}>
              {token}
            </span>
          );
        }

        if (/^[\[\]{}.,]$/.test(token)) {
          return <React.Fragment key={index}>{token}</React.Fragment>;
        }

        return <React.Fragment key={index}>{token}</React.Fragment>;
      })}
    </>
  );
}
