import { useEffect, useState } from "react";

export function useTypewriter(text: string, speed = 14, delay = 300) {
  const [value, setValue] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let index = 0;

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
  }, [text, speed, delay]);

  return { value, done };
}
