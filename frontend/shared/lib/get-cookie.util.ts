import Cookies from "js-cookie";

/**
 * Получает значение куки по ключу (только для Client Components)
 */
export const getCookie = (key: string) => {
  return Cookies.get(key);
};
