import React from "react";

import Octopus from "./img/octopus.png";
import Jest from "./img/jest.svg";
import ReactLogo from "./img/react.svg";

export function App() {
  return (
    <div className="app">
      <div className="container">
        <section className="modal">
          <div className="logos">
            <a href="https://es.reactjs.org/">
              <img className="logo" src={ReactLogo} alt="logo de React" />
            </a>
            <a href="https://jestjs.io/">
              <img className="logo" src={Jest} alt="logo de Jest" />
            </a>
            <a href="https://testing-library.com/">
              <img
                className="logo"
                src={Octopus}
                alt="logo de React-Testing-Library"
              />
            </a>
          </div>
          <div>Taller de 🐙 React-Testing-Library</div>
          <div className="links">
            <a className="link">Presentacion</a>
            <a className="link">Componentes</a>
          </div>
        </section>
      </div>
      <section className="info">
        <div className="data">
          <a href="https://enbonnet.me/">Ender Bonnet</a>
          con ❤️ para{" "}
          <a href="https://eclass.com">
            <img
              className="eclass"
              src="https://www.eclass.com/cl/wp-content/themes/eclass/dist/images/svg/logo-white.svg"
            />
          </a>
        </div>
      </section>
    </div>
  );
}
