import { formatDate } from "./formatDate";

test("format date", () => {
  expect(formatDate("2021-01-01")).toBe("01/01/2021");
  expect(formatDate("2021-01-01T00:00:00")).toBe("01/01/2021");
});
