import React from "react";
import "babel-polyfill";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axiosMock from "axios";
import { Fetch } from "./Fetch";

jest.mock("axios");
afterEach(cleanup);

test("cargar y mostrar saludos", async () => {
  const url = "/greeting";
  const { getByText, getByTestId } = render(<Fetch url={url} />);

  axiosMock.get.mockResolvedValueOnce({
    data: { greeting: "hello there" }
  });

  fireEvent.click(getByText("Load Greeting"));

  const greetingTextNode = await waitForElement(() =>
    getByTestId("greeting-text")
  );

  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(url);
  expect(getByTestId("greeting-text")).toHaveTextContent("hello there");
  expect(getByTestId("ok-button")).toHaveAttribute("disabled");
});
