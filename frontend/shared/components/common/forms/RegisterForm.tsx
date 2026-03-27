"use client";

import {
  registerSchema,
  RegisterSchemaType,
} from "@/shared/schemas/register.schema";
import { API } from "@/shared/services/api-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const { handleSubmit } = useForm<RegisterSchemaType>({
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
    } catch (error) {
      console.error("Ошибка при попытке создать аккаунт", error);
    }
  };

  return <form onSubmit={handleSubmit(onSubmit)}>
    
  </form>;
};

export default RegisterForm;
