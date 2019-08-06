import React from "react";

export function Components({ setView = { setView } }) {
  return (
    <div className="components">
      <h1>Componentes para probar</h1>
      <div className="option" onClick={() => setView("counter")}>
        Contador
      </div>
      <br />
      <button className="volver" onClick={() => setView("inicio")}>
        Volver
      </button>
    </div>
  );
}
