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
      <div className="option" onClick={() => setView("buttonPro")}>
        Boton Pro
      </div>
      <br />
      <div className="option" onClick={() => setView("form")}>
        Formulario
      </div>
      <br />
      <div className="option" onClick={() => setView("fetch")}>
        Fetch
      </div>
      <br />
      <button className="volver" onClick={() => setView("inicio")}>
        Volver
      </button>
    </div>
  );
}
