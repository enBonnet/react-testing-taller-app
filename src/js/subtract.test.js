import { subtract } from "./subtract";

test("se espera que devuelva la resta", () => {
  const total = subtract(5, 2);
  expect(total).toBe(3);
});
