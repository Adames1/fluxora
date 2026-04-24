import { z } from "zod";

export const taskPriorityOptions = ["low", "medium", "high"];

export const taskSchema = z.object({
  name: z
    .string()
    .min(1, "El nombre es requerido")
    .min(3, "El nombre debe tener al menos 3 caracteres"),
  priority: z
    .enum(taskPriorityOptions, {
      errorMap: () => ({ message: "Prioridad inválida" }),
    })
    .default("low"),
});

export const taskDefaultValues = {
  name: "",
  priority: "low",
};
