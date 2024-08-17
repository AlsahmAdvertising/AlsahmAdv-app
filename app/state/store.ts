import elements from "@/helper/elements";
import { create } from "zustand";

const useStore = create<{
  isCategories: boolean;
  currentPage: number;
  loading: boolean;
  setLoading: (newCurrent: boolean) => void;
  setCurrentPage: (newCurrent: number) => void;
  setIsCategories: (newState: boolean) => void;
}>((set) => ({
  isCategories: true,
  loading: false,
  setLoading: (newCurrent: boolean) => {
    set(() => ({
      loading: newCurrent,
    }));
  },
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
