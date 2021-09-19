import React from "react";
import PropTypes from "prop-types";
import useMagicColor from "../../hooks/useMagicColor";
import "./MagicBox.css";

MagicBox.propTypes = {};

function MagicBox(props) {
  const color = useMagicColor();
  console.log(color);
  return <div className="magic-box" style={{ backgroundColor: color }}></div>;
}

export default MagicBox;
