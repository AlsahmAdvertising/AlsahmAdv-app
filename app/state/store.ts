import elements from "@/helper/elements";
import { create } from "zustand";

const useStore = create<{
  isCategories: boolean;
  currentPage: number;
  setCurrentPage: (newCurrent: number) => void;
  setIsCategories: (newState: boolean) => void;
}>((set) => ({
  isCategories: true,
  currentPage: 0,
  setCurrentPage: (newCurrent: number) => {
    set(() => ({
      currentPage: newCurrent,
    }));
  },
  setIsCategories: (newState: boolean) => {
    set(() => ({
      isCategories: newState,
    }));
  },
}));

export default useStore;
