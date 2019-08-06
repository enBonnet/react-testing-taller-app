import React from "react";

export function Components({ setView }) {
  return (
    <div className="components">
      <h1>Componentes</h1>
      <div className="option" onClick={() => setView("counter")}>
        Contador
      </div>
      <br />
      <div className="option" onClick={() => setView("counterFail")}>
        Contador Fail
      </div>
      <br />
      <button className="volver" onClick={() => setView("inicio")}>
        Volver
      </button>
    </div>
  );
}
