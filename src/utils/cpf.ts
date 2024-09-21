export const formatCPF = (value: string) => {
  const cpf = value.replace(/\D/g, "");

  return cpf
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");
};

export const removeCPFFormatting = (value: string) => {
  return value.replace(/\D/g, "");
};

export const isValidCPF = (cpf: string) => {
  cpf = cpf.replace(/[^\d]/g, "");

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  const calculateChecksum = (cpfArray: Array<number>, length: number) => {
    let sum = 0;

    for (let i = 0; i < length; i++) {
      sum += cpfArray[i] * (length + 1 - i);
    }

    const remainder = (sum * 10) % 11;

    return remainder === 10 ? 0 : remainder;
  };

  const cpfArray = cpf.split("").map(Number);

  const firstChecksum = calculateChecksum(cpfArray, 9);
  const secondChecksum = calculateChecksum(cpfArray, 10);

  return firstChecksum === cpfArray[9] && secondChecksum === cpfArray[10];
};
