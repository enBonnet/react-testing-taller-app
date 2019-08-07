import React from "react";

export function ButtonPro({ setView }) {
  return (
    <div>
      <div>Soy el botón Pro</div>
      <button className="volver" onClick={() => setView("components")}>
        Volver
      </button>
    </div>
  );
}
