"use client";

import { store } from "@/shared/store/store";
import { SessionProvider } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";
import { type ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <Provider store={store}>
      <NextTopLoader color="var(--primary)" />
      <SessionProvider>{children}</SessionProvider>
      <Toaster />
    </Provider>
  );
};

export default Providers;
