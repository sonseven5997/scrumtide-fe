import { useMutation } from "@tanstack/react-query";
import { login } from "../_apis/auth";
import { useAuthStore } from "../_stores/auth";
import { axiosErrorHandler } from "../_utils";
import { useRouter, useSearchParams } from "next/navigation";

export const useLogin = () => {
  const { setToken: setAccessToken, setUser } = useAuthStore();
  const searchParams = useSearchParams();
  const router = useRouter();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setAccessToken(data.data.token);
      setUser(data.data.user);
      const redirect = searchParams.get("redirect");
      if (!redirect) return router.push("/");
      router.push(redirect);
    },
    onError: axiosErrorHandler,
  });
};
