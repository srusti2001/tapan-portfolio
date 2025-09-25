import React, { useState, useEffect } from "react";

const TypingText = ({ lines, speed = 100, pause = 2000 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === lines[index].length) {
      const timeout = setTimeout(() => {
        setSubIndex(0);
        setIndex((prev) => (prev + 1) % lines.length);
      }, pause);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, lines, speed, pause]);

  // Blink cursor
  useEffect(() => {
    const timeout2 = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(timeout2);
  }, []);

  return (
    <p className="text-gray-200 max-w-md mx-auto md:mx-0 text-lg sm:text-xl">
      {lines[index].substring(0, subIndex)}
      <span className="text-white">{blink ? "|" : " "}</span>
    </p>
  );
};

export default TypingText;
