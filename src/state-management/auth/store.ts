import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
interface AuthStore {
  user: string;
  login: (user: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: "",
  login: (user: string) => set(() => ({ user })),
  logout: () => set(() => ({ user: "" })),
}));

export default useAuthStore;

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Auth Store", useAuthStore);
}
