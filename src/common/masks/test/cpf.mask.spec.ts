import { maskCpf, unmaskCpf } from "..";

describe("CPF Mask", () => {
  it("should be able to mask a CPF", () => {
    expect(maskCpf("")).toBe("");
    expect(maskCpf("1111")).toBe("111.1");
    expect(maskCpf("11111111111")).toBe("111.111.111-11");
    expect(maskCpf("111111111111")).toBe("111.111.111-11");
  });

  it("should be able to unmask a CPF", () => {
    expect(unmaskCpf("")).toBe("");
    expect(unmaskCpf("111.1")).toBe("1111");
    expect(unmaskCpf("000.111.111-11")).toBe("00011111111");
  });
});
