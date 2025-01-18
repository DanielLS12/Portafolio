import { z } from "zod";

export const contactSheme = z.object({
  user_name: z
    .string()
    .trim()
    .min(1, {
      message: "El nombre es requerido",
    })
    .max(60, {
      message: "El nombre solo permite como máximo 60 caracteres",
    }),
  user_email: z.string().trim().email({
    message: "Ingrese un correo válido",
  }),
  message: z
    .string()
    .trim()
    .min(1, {
      message: "El mensaje es requerido",
    })
    .max(300, {
      message: "El mensaje solo permite como máximo 300 caracteres",
    }),
});
