import { useEffect, useState } from "react";
import { useAuthStore } from "../_stores/auth";
import { usePathname, useRouter } from "next/navigation";

const AUTH_PATH = "/auth";

export function useInitApp() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    (async () => {
      await useAuthStore.persist.rehydrate();
      setIsClient(true);
    })();
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const user = useAuthStore.getState().user;
    if (!user && !pathname.includes(AUTH_PATH)) {
      const params = new URLSearchParams();
      params.set("redirect", pathname);
      router.push(`/auth/login?${params.toString()}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClient]);

  return { isClient };
}
