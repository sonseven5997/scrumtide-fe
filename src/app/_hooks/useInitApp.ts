import { useEffect, useState } from "react";
import { useAuthStore } from "../_stores/auth";
import { usePathname, useRouter } from "next/navigation";

const AUTH_PATH = "/auth";

export function useInitApp() {
  const [isClient, setIsClient] = useState(false);
  const { user } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
    if (!user && !pathname.includes(AUTH_PATH)) {
      const params = new URLSearchParams();
      params.set("redirect", pathname);
      router.push(`/auth/login?${params.toString()}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isClient };
}
