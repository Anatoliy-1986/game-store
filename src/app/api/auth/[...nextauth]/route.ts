import NextAuth from "next-auth/next";
import { NextAuthConfig } from "@/src/entities/session/next-auth-config";
// import { nextAuthConfig } from "@/src/entities/session/next-auth-config";

const authHandler = NextAuth(NextAuthConfig);

export { authHandler as GET, authHandler as POST };
