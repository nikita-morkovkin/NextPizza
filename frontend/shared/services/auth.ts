import axiosInstance from "./instance";

interface SignInParams {
  email: string;
  password: string;
}

interface CreateParams extends SignInParams {
  fullName: string;
}

export const signIn = async (params: SignInParams) => {
  const { email, password } = params;

  const { data } = await axiosInstance.post("/auth/sign-in", {
    email,
    password,
  });

  return data;
};

export const create = async (params: CreateParams) => {
  const { email, password, fullName } = params;

  const { data } = await axiosInstance.post("/auth/create", {
    email,
    password,
    fullName,
  });

  return data;
};

export const getMe = async (email: string) => {
  const { data } = await axiosInstance.get("/auth/me", {
    params: {
      email,
    },
  });
  return data;
};
