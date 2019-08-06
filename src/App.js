import React, { useState } from "react";

import { Inicio } from "./components/Inicio";
import { Footer } from "./components/Footer";
import { Components } from "./components/Components";
import { Counter } from "./components/Counter";

export function App() {
  const [view, setView] = useState("inicio");

  const getView = view => {
    switch (view) {
      case "inicio":
        return <Inicio setView={setView} />;

      case "components":
        return <Components setView={setView} />;

      case "counter":
        return <Counter setView={setView} />;

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
