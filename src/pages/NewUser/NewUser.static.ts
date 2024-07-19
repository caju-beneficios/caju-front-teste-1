import { z } from "zod";
import { validateCpf } from "~/utils/validations";

export const validateSchema = z.object({
  name: z
    .string()
    .min(2, "Nome muito curto")
    .regex(/^[^\d][^\d]*\s+[^\d\s]+.*$/, {
      message: "Nome inválido",
    }),
  email: z.string().email("Email inválido"),
  document_number: z
    .string({ required_error: "CPF obrigatório" })
    .length(14, "CPF inválido")
    .refine((v) => validateCpf(v), {
      message: "CPF inválido",
    }),
  date: z.string().min(10, { message: "Data obrigatória" }),
});
