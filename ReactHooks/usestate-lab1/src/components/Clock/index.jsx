import React from "react";
import useClock from "../../hooks/useClock";
import "./index.css";

Clock.propTypes = {};

function Clock() {
  const { timeString } = useClock();

  return <p>{timeString}</p>;
}

export default Clock;
