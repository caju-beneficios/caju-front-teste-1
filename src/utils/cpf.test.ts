import { formatCPF, removeCPFFormatting, isValidCPF } from "./cpf";

describe("CPF Utilities", () => {
  describe("formatCPF", () => {
    it("should format a valid CPF correctly", () => {
      expect(formatCPF("12345678901")).toBe("123.456.789-01");
    });

    it("should handle already formatted CPF", () => {
      expect(formatCPF("123.456.789-01")).toBe("123.456.789-01");
    });

    it("should handle invalid input correctly", () => {
      expect(formatCPF("123")).toBe("123");
      expect(formatCPF("abc")).toBe("");
    });
  });

  describe("removeCPFFormatting", () => {
    it("should remove formatting from a formatted CPF", () => {
      expect(removeCPFFormatting("123.456.789-01")).toBe("12345678901");
    });

    it("should handle already unformatted CPF", () => {
      expect(removeCPFFormatting("12345678901")).toBe("12345678901");
    });

    it("should handle input with non-numeric characters", () => {
      expect(removeCPFFormatting("123.abc.789-01")).toBe("12378901");
    });
  });

  describe("isValidCPF", () => {
    it("should validate correctly formatted CPF", () => {
      expect(isValidCPF("123.456.789-09")).toBe(true);
    });

    it("should validate CPF that starts with zero", () => {
      expect(isValidCPF("05132869505")).toBe(true);
    });

    it("should invalidate CPF with incorrect checksums", () => {
      expect(isValidCPF("123.456.789-00")).toBe(false);
    });

    it("should invalidate CPF with repeating digits", () => {
      expect(isValidCPF("111.111.111-11")).toBe(false);
    });

    it("should invalidate CPF with incorrect length", () => {
      expect(isValidCPF("123.456.789")).toBe(false);
      expect(isValidCPF("123.456.789-0123")).toBe(false);
    });

    it("should validate CPF without formatting", () => {
      expect(isValidCPF("12345678909")).toBe(true);
    });

    it("should handle empty or null input", () => {
      expect(isValidCPF("")).toBe(false);
      expect(isValidCPF("00000000000")).toBe(false);
    });
  });
});
