import React from "react";

export function Login({ setView }) {
  return (
    <div>
      <div>Holi soy el login</div>
      <button className="volver" onClick={() => setView("components")}>
        Volver
      </button>
    </div>
  );
}
