import {
  registerSchema,
  type RegisterSchemaType,
} from "@/shared/schemas/register.schema";
import { API } from "@/shared/services/api-client";
import { UserType } from "@/shared/types/user.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { signOut } from "next-auth/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button, Input } from "../../ui";
import Container from "../Container";
import { Title } from "../Title";

interface ProfileFormProps {
  user: UserType;
}

const ProfileForm = ({ user }: ProfileFormProps) => {
  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: user.email,
      fullName: user.fullName,
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: RegisterSchemaType) => {
    try {
      await API.user.changeInfo(data);

      toast.success("Профиль успешно обновлен");
    } catch {
      toast.error("Не удалось обновить профиль, попробуйте еще раз...", {
        icon: "❌",
      });
    }
  };

  const onClickSignOut = () => {
    signOut({
      callbackUrl: "",
    });
  };

  return (
    <Container className="my-10">
      <Title text="Личные данные" size="md" className="font-bold" />

      <form
        {...form}
        className="flex flex-col gap-5 w-96 mt-10"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Input name="email" type="email" required />
        <Input name="fullName" type="text" required />

        <Input name="password" type="password" required />
        <Input name="confirmPassword" type="password" required />

        <Button
          disabled={form.formState.isSubmitting}
          className="text-base mt-10"
          type="submit"
        >
          Сохранить
        </Button>

        <Button
          className="text-base"
          variant={"secondary"}
          type="button"
          disabled={form.formState.isSubmitting}
          onClick={onClickSignOut}
        >
          Выйти из аккаунта
        </Button>
      </form>
    </Container>
  );
};

export default ProfileForm;
