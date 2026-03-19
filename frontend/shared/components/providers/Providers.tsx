"use client";

import { store } from "@/shared/store/store";
import { type ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <Provider store={store}>
      {children}
      <Toaster />
    </Provider>
  );
};

export default Providers;
