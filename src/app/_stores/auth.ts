import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { User } from "../_types/auth";

type AuthStoreStates = {
  token: string | null;
  user: User | null;
};

type AuthStoreActions = {
  setToken: (accessToken: string) => void;
  reset: () => void;
  setUser: (user: User) => void;
};

const initialState: AuthStoreStates = {
  token: null,
  user: null,
};

export const useAuthStore = create<AuthStoreStates & AuthStoreActions>()(
  persist(
    (set) => ({
      ...initialState,
      setToken: (accessToken: string) => set({ token: accessToken }),
      setUser: (user: User) => set({ user }),
      reset: () => set(initialState),
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
    }
  )
);
