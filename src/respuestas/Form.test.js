import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Form } from "../Form";
import "@testing-library/jest-dom/extend-expect";

test("rellenar los campos del formulario y limpiar los campos al enviarlo", () => {
  const { getByLabelText, getByText } = render(<Form />);
  const username = "Rodrigo Fernandez";
  const correo = "correo@correo.com";
  const password = "Esta clave es super segura";

  const usuarioInput = getByLabelText(/usuario/i);
  fireEvent.change(usuarioInput, {
    target: { value: username }
  });
  expect(usuarioInput.value).toBe(username);

  const correoInput = getByLabelText(/correo/i);
  fireEvent.change(correoInput, {
    target: { value: correo }
  });
  expect(correoInput.value).toBe(correo);

  const claveInput = getByLabelText(/clave/i);
  fireEvent.change(claveInput, {
    target: { value: password }
  });
  expect(claveInput.value).toBe(password);

  fireEvent.click(getByText(/enviar/i));

  expect(usuarioInput.value).toBe("");
  expect(correoInput.value).toBe("");
  expect(claveInput.value).toBe("");
});
