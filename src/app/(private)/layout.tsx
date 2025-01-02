import React from "react";
import { Header } from "@/src/widgets/Header";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header variant="private" />
      {children}
    </>
  );
};

export default Layout;
