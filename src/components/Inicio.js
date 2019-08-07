import React, { Fragment } from "react";

import Octopus from "../img/octopus.png";
import Jest from "../img/jest.svg";
import ReactLogo from "../img/react.svg";

export function Inicio({ setView }) {
  return (
    <Fragment>
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
        <a
          className="link"
          href="https://github.com/enBonnet/react-testing-taller-app"
        >
          Repositorio
        </a>
        <a
          className="link"
          href="https://testing-library-taller-ppt.netlify.com/"
        >
          Presentacion
        </a>
        <a onClick={() => setView("components")} className="link">
          Componentes
        </a>
      </div>
    </Fragment>
  );
}
