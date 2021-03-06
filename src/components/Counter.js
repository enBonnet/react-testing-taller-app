import React, { useState } from "react";

export function Counter({ setView }) {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h1>Si, esto es otro contador</h1>
      <button
        className="count"
        id="counter"
        onClick={() => setCount(count + 1)}
      >
        {count}
      </button>
      <br />
      <button className="volver" onClick={() => setView("components")}>
        Volver
      </button>
    </div>
  );
}
