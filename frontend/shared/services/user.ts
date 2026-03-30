import { getServerSession } from "next-auth";
import { type RegisterSchemaType } from "../schemas/register.schema";
import axiosInstance from "./instance";

type ChangeUserInfo = Omit<RegisterSchemaType, "confirmPassword">;

export const changeInfo = async (data: ChangeUserInfo) => {
  const user = getServerSession();

  if (!user) {
    throw new Error("Пользователь не авторизован");
  }

  const response = await axiosInstance.patch("/user/change-info", data);

  return response.data;
};
