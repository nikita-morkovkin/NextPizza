import { Header } from "@/shared/components/common";
import { type Metadata } from "next";
import { type ReactNode } from "react";
import "../globals.css";

export const metadata: Metadata = {
  title: "Next Pizza | Оформление заказа",
};

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div>
      <Header isEnableSearchInput={false} isEnableBuyButton={false} />
      <main>{children}</main>
    </div>
  );
}
