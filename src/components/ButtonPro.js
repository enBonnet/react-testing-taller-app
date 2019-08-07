import React, { useState } from "react";

const styles = {
  negro: {
    backgroundColor: "black",
    color: "white"
  },
  blanco: {
    color: "black",
    backgroundColor: "white"
  }
};

export function ButtonPro({ setView }) {
  const [color, setColor] = useState("negro");

  const toggleColor = () => {
    if (color === "negro") {
      setColor("blanco");
    } else {
      setColor("negro");
    }
  };

  return (
    <div className="caja" style={styles[color]}>
      <div>Boton Pro</div>
      <div>
        <button
          className="botonpro"
          id="boton_pro"
          onClick={() => toggleColor()}
        >
          Haceme click
        </button>
      </div>
      <div id="color">Color: {`${color}`}</div>
      <button
        className="volver"
        id="volver"
        onClick={() => setView("components")}
      >
        Volver
      </button>
    </div>
  );
}
