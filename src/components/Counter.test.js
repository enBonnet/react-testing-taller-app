import React from "react";
import ReactDOM from "react-dom";
import { Counter } from "./Counter";

test("se espera que el contador incremente con cada click", () => {
  const div = document.createElement("div");
  document.body.appendChild(div);

  ReactDOM.render(<Counter />, div);
  const button = div.querySelector("#counter");

  expect(button.textContent).toBe("0");
  button.click();
  expect(button.textContent).toBe("1");
  button.click();
  expect(button.textContent).toBe("2");
  button.click();
  expect(button.textContent).toBe("3");

  document.body.removeChild(div);
});
