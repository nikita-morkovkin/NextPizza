import { handlers } from "@/auth";
import NextAuth from "next-auth";

const handler = NextAuth({
  ...handlers,
});

export { handler as GET, handler as POST };
