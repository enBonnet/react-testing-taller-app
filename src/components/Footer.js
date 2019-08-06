import React from "react";

import eclass from "../img/eclass.svg";

export function Footer() {
  return (
    <section className="info">
      <div className="data">
        <a href="https://enbonnet.me/">Ender Bonnet</a>
        con ❤️ para{" "}
        <a href="https://eclass.com">
          <img className="eclass" src={eclass} />
        </a>
      </div>
    </section>
  );
}
