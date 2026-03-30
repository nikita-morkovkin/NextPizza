"use client";

import {
  loginSchema,
  type LoginSchemaType,
} from "@/shared/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button, Input } from "../../ui";
import { Title } from "../Title";

interface LoginFormProps {
  onClose: () => void;
}

const LoginForm = ({ onClose }: LoginFormProps) => {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginSchemaType) => {
    try {
      await signIn("credentials", {
        ...data,
        redirect: false,
      });

      onClose();

      toast.success("Вы успешно вошли в аккаунт", {
        icon: "✅",
      });
    } catch {
      console.error("Ошибка при попытке входа в аккаунт");
      toast.error("Ошибка при попытке входа в аккаунт", {
        icon: "❌",
      });
    }
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-between items-center">
        <div className="mr-2">
          <Title text="Вход в аккаунт" size="md" className="font-bold" />
          <p className="text-gray-400">
            Введите свою почту и пароль, чтобы войти в аккаунт
          </p>
        </div>
      </div>

      <Input name="email" type="email" placeholder="Введите ваш email" />
      <Input name="password" type="password" placeholder="Введите ваш пароль" />

      <Button disabled={isSubmitting} className="h-12 text-base" type="submit">
        {isSubmitting ? "Загрузка ..." : "Войти"}
      </Button>
    </form>
  );
};

export default LoginForm;
