import { Header } from "@/components/common";
import { type Metadata } from "next";
import { type ReactNode } from "react";
import "../globals.css";

export const metadata: Metadata = {
  title: "Next Pizza | Главная",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <Header />
      <main className="min-h-screen">{children}</main>
    </div>
  );
}
