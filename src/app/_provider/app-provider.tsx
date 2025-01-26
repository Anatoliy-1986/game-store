"use client";

import React from "react";
import { ComposeChildren } from "@/src/shared/lib/react";
import { AppSessionProvider } from "@/src/entities/session/app-session-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/src/shared/api/query-client";
import AuthCheck from "@/src/shared/lib/AuthCheck";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ComposeChildren>
      <AppSessionProvider />
      <AuthCheck />
      {/*<QueryClientProvider client={queryClient} />*/}
      {children}
    </ComposeChildren>
  );
};

export default AppProvider;
