"use client";

import React from "react";
import { ComposeChildren } from "@/src/shared/lib/react";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <ComposeChildren>{children}</ComposeChildren>;
};

export default AppProvider;
