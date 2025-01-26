"use client";
import React, { useState } from "react";
// import { signIn, signOut, useSession } from "next-auth/react";
// import { signIn } from 'next-auth/client';
import SignInButton from "@/src/features/auth/sign-in-button";
import { useSignOut } from "@/src/features/auth/use-sign-out";
import { Button } from "@/src/shared";
import { useRouter } from "next/navigation";
import { getCsrfToken, signIn } from "next-auth/react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getServerSideProps } from "next/dist/build/templates/pages";

const SignIn = () => {
  // const { data: session, status, update } = useSession();
  //
  // console.log("session", status);

  const router = useRouter();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const result = await signIn("credentials", {
      login,
      password,
      redirect: false,
    });

    // console.log("result", result);

    if (result?.error) {
      setError(result?.error);
    } else {
      // Перенаправление на защищенную страницу
      router.push("/home");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Логин:
        <input
          type="text"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
      </label>
      <label>
        Пароль:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button type="submit">Войти</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );

  // const { signOut, isPending: isLoadingSignOut } = useSignOut();
  // if (status === "loading") {
  //   return <div>Loading...</div>;
  // }
  // if (status === "unauthenticated") {
  //   return <SignInButton />;
  // }
  //
  // return (
  //   <>
  //     {/*Signed in as {session?.user?.email} <br />*/}
  //     {/*<button onClick={() => signOut()}>Sign out</button>*/}
  //     <p>Мой аккаунт</p>
  //     <p className="text-xs text-muted-foreground overflow-hidden text-ellipsis">
  //       {session?.data?.user.name}
  //     </p>
  //     <Button disabled={isLoadingSignOut} onClick={() => signOut()}>
  //       Выйти
  //     </Button>
  //   </>
  // );
};

export default SignIn;

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   return {
//     props: {
//       csrfToken: await getCsrfToken(context),
//     },
//   };
// }
