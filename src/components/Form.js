import React from "react";

export function Form({ setView }) {
  return (
    <div>
      <div>Holi soy un form</div>
      <button className="volver" onClick={() => setView("components")}>
        Volver
      </button>
    </div>
  );
}
