import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { RoleType } from "@/src/entities/session/types";

const users = [
  {
    id: "1",
    name: "Анатолий",
    login: "admin",
    password: "password",
    role: "admin",
  },
  { id: "2", name: "Николай", login: "user", password: "123", role: "user" },
];

interface User {
  id: string;
  name: string;
  role: string;
}

export const NextAuthConfig: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        login: { label: "Логин", type: "text" },
        password: { label: "Пароль", type: "password" },
      },
      async authorize(credentials) {
        // Верификация логина и пароля
        const user = users.find(
          (user) =>
            user.login === credentials?.login &&
            user.password === credentials.password,
        );

        if (user) {
          // return user;
          // return { id: user?.id, name: user?.name, role: user?.role }; // Возвращаем нужные поля
          const { id, name, role } = user;
          return { id, name, role } as User;
        } else {
          throw new Error("Invalid login or password");
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // Добавляем роль пользователя в объект сессии
      if (token) {
        session.user.role = token.role as RoleType; // Передаем роль из токена в сессию
      }
      return session;
    },
    async jwt({ token, user }) {
      // Сохраняем роль пользователя в токене при входе
      if (user) {
        token.role = user.role; // Сохраняем роль в токен
      }
      return token;
    },
  },
};
