import { useEffect, useState } from "react";

export function useTypewriter(
  text: string,
  startFromKeyword = "stack",
  speed = 14,
  delay = 300,
) {
  const [value, setValue] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const startIndex = text.indexOf(startFromKeyword);

    const timeout = setTimeout(() => {
      let index = startIndex > 0 ? startIndex : 0;

      const interval = setInterval(() => {
        index++;

        setValue(text.slice(0, index));

        if (index >= text.length) {
          setDone(true);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, startFromKeyword, speed, delay]);

  return { value, done };
}
