import React, { useState } from "react";

import { Inicio } from "./components/Inicio";
import { Footer } from "./components/Footer";

export function App() {
  const [view, setView] = useState("inicio");

  const getView = view => {
    switch (view) {
      case "inicio":
        return <Inicio setView={setView} />;

      case "components":
        console.log("holi");
        return <h1>Holi</h1>;

      default:
        return <Inicio setView={setView} />;
    }
  };

  return (
    <div className="app">
      <div className="container">
        <section className="modal">{getView(view)}</section>
      </div>
      <Footer />
    </div>
  );
}
