import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { ButtonPro } from "../ButtonPro";

afterEach(cleanup);

test("renderiza y cambia de color", () => {
  const { container } = render(<ButtonPro />);
  const buttonVolver = container.querySelector("#volver");
  expect(buttonVolver.textContent).toBe("Volver");

  const caja = container.querySelector(".caja");
  expect(caja.style.backgroundColor).toBe("black");

  const buttonPro = container.querySelector("#boton_pro");
  expect(buttonPro.textContent).toBe("Haceme click");

  fireEvent.click(buttonPro);

  expect(caja.style.backgroundColor).toBe("white");
});
