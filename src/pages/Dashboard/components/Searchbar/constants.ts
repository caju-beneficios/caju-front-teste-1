import { z } from "zod";

import { isValidCPF } from "~/utils";

export const validationSchema = z.object({
  cpf: z
    .string()
    .refine(
      isValidCPF,
      "CPF inválido. Certifique-se de que os dígitos estão corretos."
    ),
});

export type ValidationSchema = z.infer<typeof validationSchema>;
