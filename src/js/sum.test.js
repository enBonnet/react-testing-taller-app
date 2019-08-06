import { sum } from "./sum";

test("se espera que devuelva la suma", () => {
  const total = sum(1, 2);
  expect(total).toBe(3);
});
