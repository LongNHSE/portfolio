"use client";
import React from "react";
import { motion } from "motion/react";

export function ColourfulText({ text }: { text: string }) {
  const colors = ["#FFFFFF", "#FD5958"];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const splitText = splitIntoRandomGroups(text);

  return splitText.map((chunk, index) => (
    <motion.span
      key={`${chunk}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.5,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight"
    >
      {chunk}
    </motion.span>
  ));
}
function splitIntoRandomGroups(text: string): string[] {
  const result: string[] = [];
  let i = 0;

  while (i < text.length) {
    // Randomly choose a group size of 2 or 3, ensuring we don't exceed the string length
    const remainingChars = text.length - i;
    let groupSize = remainingChars === 1 ? 1 : Math.random() < 0.5 ? 2 : 3;

    if (remainingChars < groupSize) {
      groupSize = remainingChars;
    }

    result.push(text.slice(i, i + groupSize));
    i += groupSize;
  }

  return result;
}
