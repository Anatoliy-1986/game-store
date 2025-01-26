"use client";
import React from "react";
import { Button } from "@/src/shared";
import { signIn } from "next-auth/react";

const SignInButton = () => {
  const handleSignOut = () => signIn();
  return <Button onClick={handleSignOut}>Войти</Button>;
};

export default SignInButton;
