import { Header } from "@/shared/components/common";
import { type Metadata } from "next";
import { type ReactNode } from "react";
import "../globals.css";

export const metadata: Metadata = {
  title: "Next Pizza | Главная",
};

export default function AppLayout({
  children,
  modal,
}: Readonly<{
  children: ReactNode;
  modal: ReactNode;
}>) {
  return (
    <div>
      <Header />
      <main className="min-h-screen">{children}</main>
      {modal}
    </div>
  );
}
