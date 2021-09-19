import { useState, useEffect, useRef } from "react";

const randomColor = (currentColor) => {
  const COLOR_LISTS = ["deeppink", "green", "yellow", "black", "blue"];
  const currentIndex = COLOR_LISTS.indexOf(currentColor);
  let newIndex = currentIndex;
  while (newIndex === currentIndex) {
    newIndex = Math.trunc(Math.random() * COLOR_LISTS.length);
  }
  const randomColor = COLOR_LISTS[newIndex];
  return randomColor;
};

function useMagicColor() {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");

  // change color every 1s
  useEffect(() => {
    const colorInterval = setInterval(() => {
      const newColor = randomColor(colorRef.current);
      setColor(newColor);
      colorRef.current = newColor;
    }, 1000);
    return () => {
      clearInterval(colorInterval);
    };
  }, []);

  return color;
}

export default useMagicColor;
