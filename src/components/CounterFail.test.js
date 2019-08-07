import React from "react";
import { CounterFail } from "./CounterFail";
import { render, fireEvent, cleanup } from "@testing-library/react";

afterEach(cleanup);

test("el contador se incrementa(?", () => {
  const { queryAllByText } = render(<CounterFail />);
  // Probar el compartamiento del componente con 3 clicks
});
