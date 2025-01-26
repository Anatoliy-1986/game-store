import React from "react";
import { Header } from "@/src/widgets/Header";
import AuthorizedGuard from "@/src/features/auth/authorized-guard";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header variant="private" />
      <AuthorizedGuard>{children}</AuthorizedGuard>
    </>
  );
};

export default Layout;
