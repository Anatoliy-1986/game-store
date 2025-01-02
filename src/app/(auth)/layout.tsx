import React from "react";
import { Header } from "@/src/widgets/Header";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header variant="auth" />
      {children}
    </>
  );
};

export default Layout;
