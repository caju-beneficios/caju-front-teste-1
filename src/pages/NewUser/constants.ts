import { z } from "zod";

import { isValidCPF } from "~/utils";

export const validationSchema = z.object({
  employeeName: z
    .string()
    .min(1, "O nome é obrigatório")
    .regex(/^[^\d]/, "O nome não pode começar com um número")
    .refine((value) => {
      const parts = value.split(" ");
      return parts.length > 1 && parts.some((part) => part.length >= 2);
    }, "O nome deve conter pelo menos duas letras e um espaço."),
  email: z.string().email("Digite um e-mail válido"),
  cpf: z
    .string()
    .refine(
      isValidCPF,
      "CPF inválido. Certifique-se de que os dígitos estão corretos."
    ),
  admissionDate: z.string().min(1, "A data de admissão é obrigatória"),
  status: z.enum(["APPROVED", "REVIEW", "REPROVED"]),
});

export type ValidationSchema = z.infer<typeof validationSchema>;
