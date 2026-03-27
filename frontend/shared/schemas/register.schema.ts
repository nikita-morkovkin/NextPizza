import z from "zod";

export const registerSchema = z
  .object({
    email: z.email("Почта обязательна"),
    fullName: z.string().min(3, "Имя обязателен"),
    password: z.string().min(8, "Пароль обязателен"),
    confirmPassword: z.string().min(8, "Подтверждение пароля обязателен"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });

export type RegisterSchemaType = z.infer<typeof registerSchema>;
