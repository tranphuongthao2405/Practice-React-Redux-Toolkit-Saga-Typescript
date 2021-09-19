import React, { useState } from "react";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {" "}
        Increase
      </button>
      <Hero name="Mim" />
    </div>
  );
}

export default App;
