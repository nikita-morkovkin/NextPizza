import z from "zod";

export const checkoutUserInfoSchema = z.object({
  firstName: z
    .string()
    .min(1, "Имя должно быть заполнено и содержать не менее 1 символа"),
  lastName: z
    .string()
    .min(1, "Фамилия должна быть заполнена и содержать не менее 1 символа"),
  email: z.email("Некорректный email"),
  phone: z.string().min(1, "Телефон должен быть заполнен"),
  address: z.string().min(1, "Адрес должен быть заполнен"),
  comment: z.string().optional(),
});

export type CheckoutUserInfoSchemaType = z.infer<typeof checkoutUserInfoSchema>;
