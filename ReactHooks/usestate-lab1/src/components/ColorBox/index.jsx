import React, { useState } from "react";
import "./index.css";

// ham doc lap voi component nen viet ra ngoai
// neu project lon hon co the tach ra thanh utils
const getRandomColor = () => {
  const COLOR_LISTS = ["deeppink", "green", "yellow", "black", "blue"];
  const randomIndex = Math.trunc(Math.random() * COLOR_LISTS.length);
  const randomColor = COLOR_LISTS[randomIndex];
  return randomColor;
};

function ColorBox() {
    // su dung initial state callback de code chi chay 1 lan khi render lan dau
    // khong bi render lap di lap lai trong nhung render sau khong can thiet
    // vi initialState chi render gia tri lan dau
  const [color, setColor] = useState(() => {
    const initialState = localStorage.getItem("box_color") || "deeppink";
    return initialState;
  });

  const handleBoxClick = () => {
    // get random color
    const newColor = getRandomColor("deeppink");
    setColor(newColor);

    localStorage.setItem("box_color", newColor);
  };

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    ></div>
  );
}

export default ColorBox;
