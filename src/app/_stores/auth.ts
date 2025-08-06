import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../_models/auth";

type AuthStoreStates = {
  accessToken: string | null;
  user: User | null;
};

type AuthStoreActions = {
  setAccessToken: (accessToken: string) => void;
};

const initialState: AuthStoreStates = {
  accessToken: null,
  user: null,
};

export const useAuthStore = create<AuthStoreStates & AuthStoreActions>()(
  persist(
    (set) => ({
      ...initialState,
      setAccessToken: (accessToken: string) => set({ accessToken }),
      setUser: (user: User) => set({ user }),
      reset: () => set(initialState),
    }),
    { name: "auth" }
  )
);
