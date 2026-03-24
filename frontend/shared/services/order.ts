import { type CheckoutUserInfoSchemaType } from "../schemas/checkout-user-info.schema";
import { type InputJsonValue } from "../types/input-json-value.type";
import axiosInstance from "./instance";

export const createOrder = async (
  data: CheckoutUserInfoSchemaType,
  token: string,
  items: InputJsonValue[],
  totalAmount: number,
  userId?: string | null,
): Promise<string> => {
  const payload = {
    ...data,
    fullName: `${data.firstName} ${data.lastName}`,
    items,
    totalAmount,
    token,
    userId: userId || "",
  };

  const response = await axiosInstance.post("order/create", payload);

  return response.data;
};
