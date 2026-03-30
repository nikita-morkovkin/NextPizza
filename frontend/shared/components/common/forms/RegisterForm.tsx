"use client";

import {
  registerSchema,
  RegisterSchemaType,
} from "@/shared/schemas/register.schema";
import { API } from "@/shared/services/api-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Button, Input } from "../../ui";
import { Title } from "../Title";

interface RegisterFormProps {
  onClose: () => void;
}

const RegisterForm = ({ onClose }: RegisterFormProps) => {
  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: RegisterSchemaType) => {
    try {
      await API.auth.create(data);

      onClose();

      toast.success("Вы успешно создали аккаунт", {
        icon: "✅",
      });
    } catch {
      toast.error("Ошибка при попытке создать аккаунт", {
        icon: "❌",
      });
    }
  };

  return (
    <form
      {...form}
      className="flex flex-col gap-5"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <div className="flex justify-between items-center">
        <div className="mr-2">
          <Title text="Регистрация" size="md" className="font-bold" />
          <p className="text-gray-400">
            Введите свои данные, чтобы создать аккаунт
          </p>
        </div>
      </div>

      <Input
        type="text"
        name="fullName"
        placeholder="Введите свое полное имя"
      />

      <Input type="email" name="email" placeholder="Введите свою почту" />

      <Input
        type="password"
        name="password"
        placeholder="Введите свой пароль"
      />

      <Button
        className="h-12 text-base"
        disabled={form.formState.isSubmitting}
        type="submit"
      >
        {form.formState.isSubmitting ? "Создается..." : "Создать аккаунт"}
      </Button>
    </form>
  );
};

export default RegisterForm;
