import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthCheck({
  children,
}: {
  children?: React.ReactNode;
}) {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/auth/sign-in");
    }
  }, [session.status, router]);

  return <>{children}</>;
}
