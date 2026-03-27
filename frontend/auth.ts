import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { API } from "./shared/services/api-client";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",

      profile: async (profile) => {
        return {
          ...profile,
          email: profile.email || "",
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Почта и пароль обязателен");
        }

        const values = {
          email: credentials.email,
          password: credentials.password,
        };

        return await API.auth.signIn(values);
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "",
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account }) {
      try {
        if (account?.provider === "credentials") {
          return true;
        }

        if (!user.email) {
          return false;
        }
        return true;
      } catch {
        console.error("Ошибка при попытке войти в аккаунт");
        return false;
      }
    },
    async jwt({ token }) {
      return await API.auth.getMe(token.email || "");
    },
    async session({ session, token }) {
      session.user = token;

      return session;
    },
  },
});
