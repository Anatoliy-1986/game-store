"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";

const Home = () => {
  const { data: session, status } = useSession();

  // console.log("session", session?.user?.role);
  console.log("status", status);

  if (!session) {
    return <p>Вы не авторизованы</p>;
  }

  return (
    <>
      <p>Привет, {session?.user?.name}!</p>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
};

export default Home;
