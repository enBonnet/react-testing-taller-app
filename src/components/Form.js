import React, { useState } from "react";

export function Form({ setView }) {
  const [username, setUsername] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = event => {
    event.preventDefault();
    console.log({ username, correo, password });
    setUsername("");
    setCorreo("");
    setPassword("");
  };

  return (
    <div className="formulario">
      <div>Formulario de registro</div>
      <form onSubmit={onSubmit}>
        <label>
          Usuario
          <input
            onChange={event => setUsername(event.target.value)}
            value={username}
            type="text"
            name="username"
            placeholder="Usuario"
          />
        </label>
        <label>
          Correo
          <input
            onChange={event => setCorreo(event.target.value)}
            value={correo}
            type="email"
            name="email"
            placeholder="correo@pm.me"
          />
        </label>
        <label>
          Clave
          <input
            onChange={event => setPassword(event.target.value)}
            value={password}
            type="password"
            name="password"
            placeholder="*********"
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
      <button className="volver" onClick={() => setView("components")}>
        Volver
      </button>
    </div>
  );
}
