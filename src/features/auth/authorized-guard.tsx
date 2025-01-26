"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useAppearanceDelay } from "@/src/shared/lib/react";

export function FullPageSpinner({ isLoading = true }: { isLoading?: boolean }) {
  const show = useAppearanceDelay(isLoading);

  if (show) {
    return <div>...Loading</div>;
  }

  return null;
}

export default function AuthorizedGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = useSession();

  // const isUnauthenticated = session.status === "unauthenticated";
  //
  // useEffect(() => {
  //   if (isUnauthenticated) {
  //     signIn();
  //   }
  // }, [isUnauthenticated]);

  const isLoading =
    session.status === "loading" || session.status === "unauthenticated";

  return (
    <>
      <FullPageSpinner isLoading={isLoading} />
      {session.status === "authenticated" && children}
    </>
  );
}
