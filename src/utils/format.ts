export const formatCpf = (value: string) => {
  const onlyDigits = value.replace(/\D/g, "");
  return onlyDigits
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
};

export const formatDate = (date: string): string => {
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
};
