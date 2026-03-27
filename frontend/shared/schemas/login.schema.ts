import z from "zod";

export const loginSchema = z.object({
  email: z.email({ message: "Почта обязательна" }),
  password: z.string().min(8, "Пароль обязателен"),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
