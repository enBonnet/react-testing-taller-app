import React, { useState } from "react";

export function CounterFail({ setView }) {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h1>Si, esto es otro contador mas</h1>
      <button
        className="count"
        onClick={() => {
          if (count >= 2) {
            setCount(0);
          } else {
            setCount(count + 1);
          }
        }}
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
