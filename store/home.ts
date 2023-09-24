import { create } from "zustand";

interface HomeState {
  count: number;
  name: string;
  setCount: (newState: number) => void;
}

export const home = create<HomeState>((set) => ({
  count: 0,
  name: "",
  setCount: (newState) => set({ count: newState }),
}));
