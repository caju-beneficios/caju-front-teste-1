import { validateCpf } from "..";

test("should be able to validate a CPF", () => {
  expect(validateCpf("")).toBe(false);
  expect(validateCpf("86869331499")).toBe(true);
  expect(validateCpf("131.637.571-46")).toBe(true);
  expect(validateCpf("111.111.111-11")).toBe(false);
});
