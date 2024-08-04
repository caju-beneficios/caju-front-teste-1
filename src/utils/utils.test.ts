import { describe, test, expect } from "@jest/globals";
import { allColumns, getColumnByStatus } from "./columns";
import { validateCPF } from "./validators";
import { maskCPF } from "./mask";

describe("Utils Module", () => {
  describe("Columns", () => {
    test("Should have all Columns with title, status and color", () => {
      expect(allColumns.length).toBe(3);

      for (const column of allColumns) {
        expect(column.title).toBeDefined();
        expect(column.status).toBeDefined();
        expect(column.color).toBeDefined();
      }
    });

    test("Should get a Column by it's status", () => {
      let column = getColumnByStatus("APPROVED");
      expect(column?.title).toBe("Aprovado");
      expect(column?.color).toBe("#4242DF");

      column = getColumnByStatus("REPROVED");
      expect(column?.title).toBe("Reprovado");
      expect(column?.color).toBe("#CE2893");

      column = getColumnByStatus("REVIEW");
      expect(column?.title).toBe("Pronto para revisar");
      expect(column?.color).toBe("#EFC24D");
    });
  });

  describe("Validators", () => {
    test("Should return true when a CPF is valid", () => {
      expect(validateCPF("56642105087")).toBeTruthy();
      expect(validateCPF("566.421.050-87")).toBeTruthy();
    });

    test("Should return false when a CPF is valid", () => {
      expect(validateCPF("56642105080")).toBeFalsy();
      expect(validateCPF("566.421.050-80")).toBeFalsy();
    });
  });

  describe("Mask", () => {
    test("Should mask a CPF number", () => {
      expect(maskCPF("56642105087")).toBe("566.421.050-87");
    });

    test("Should keep a mask for a masked CPF number", () => {
      expect(maskCPF("566.421.050-87")).toBe("566.421.050-87");
    });
  });
});
