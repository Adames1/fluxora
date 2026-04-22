import { z } from "zod";

export const projectStatusOptions = ["pending", "in_progress", "completed"];

export const projectSchema = z.object({
  name: z
    .string()
    .min(1, "El nombre es requerido")
    .min(3, "El nombre debe tener al menos 3 caracteres"),
  description: z.string().optional(),
  status: z
    .enum(projectStatusOptions, {
      errorMap: () => ({ message: "Estado inválido" }),
    })
    .default("pending"),
});

export const projectDefaultValues = {
  name: "",
  description: "",
  status: "pending",
};
