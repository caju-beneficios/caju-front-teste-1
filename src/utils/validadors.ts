import { FormData, FormErrors } from "src/pages/NewUser";

export function isValidCPF(cpf: string) {
  cpf = cpf.replace(/\D/g, "");
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  let sum = 0;
  let remainder;

  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(9, 10))) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;

  return remainder === parseInt(cpf.substring(10, 11));
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
};

export const validateFullName = (name: string): boolean => {
  const trimmedName = name.trim();
  const nameRegex =
    /^[a-zA-ZÀ-ÖØ-öø-ÿ][a-zA-ZÀ-ÖØ-öø-ÿ\s]*[a-zA-ZÀ-ÖØ-öø-ÿ]{2,}$/;
  return nameRegex.test(trimmedName) && trimmedName.includes(" ");
};

export const validateForm = (
  formData: FormData
): {
  formErros: FormErrors;
  isValidForm: boolean;
} => {
  const newErrors: FormErrors = {};
  if (!validateFullName(formData.employeeName)) {
    newErrors.employeeName = "Nome completo inválido";
  }
  if (!validateEmail(formData.email)) {
    newErrors.email = "Email inválido";
  }
  if (!isValidCPF(formData.cpf)) {
    newErrors.cpf = "CPF inválido";
  }
  if (!formData.admissionDate) {
    newErrors.admissionDate = "Data de admissão é obrigatória";
  }
  const isValidForm = Object.keys(newErrors).length === 0;
  const formErros = newErrors;

  return { formErros, isValidForm };
};
