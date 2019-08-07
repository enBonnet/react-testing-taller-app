import React, { useState } from "react";

import { Inicio } from "./Inicio";
import { Footer } from "./Footer";
import { Components } from "./Components";
import { Counter } from "./Counter";
import { CounterFail } from "./CounterFail";
import { ButtonPro } from "./ButtonPro";
import { Form } from "./Form";
import { Login } from "./Login";

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

      case "counterFail":
        return <CounterFail setView={setView} />;

      case "buttonPro":
        return <ButtonPro setView={setView} />;

      case "form":
        return <Form setView={setView} />;

      case "login":
        return <Login setView={setView} />;

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
