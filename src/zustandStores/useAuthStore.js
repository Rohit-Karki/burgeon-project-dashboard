import { createStore } from "zustand";
import { combine } from "zustand/middleware";

const useAuthStore = createStore((set) => ({
  authToken: "",
  setToken: (token) => set({ authToken: token }),
  logout: () => set({ authToken: "" }),
}));

export { useAuthStore };
