import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}
