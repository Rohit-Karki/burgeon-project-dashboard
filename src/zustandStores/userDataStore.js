import { createStore } from "zustand";

const useProfileDataStore = createStore((set) => ({
  data: {
    _id: "",
    name: "",
    email: "",
    userCode: "",
    org: "",
    phoneNumber: "",
    role: "",
  },
  updatedata: (data) => set(() => ({ data: data })),
}));

export { useProfileDataStore };
