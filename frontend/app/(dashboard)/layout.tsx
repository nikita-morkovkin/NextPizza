import { type Metadata } from "next";
import { type ReactNode } from "react";
import "../globals.css";

export const metadata: Metadata = {
  title: "Next Pizza | Дашбоард",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <div>{children}</div>;
}
