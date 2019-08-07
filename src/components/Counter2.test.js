import React from "react";
import { Counter } from "./Counter";
import { render, fireEvent, cleanup } from "@testing-library/react";

afterEach(cleanup);

test("el contador se incrementa", () => {
  const container = render(<Counter />);

  const counter = container.getByText("0");

  expect(counter.textContent).toBe("0");

  fireEvent.click(counter);

  expect(counter.textContent).toBe("1");

  fireEvent.click(counter);

  expect(counter.textContent).toBe("2");

  fireEvent.click(counter);

  expect(counter.textContent).toBe("3");
});
