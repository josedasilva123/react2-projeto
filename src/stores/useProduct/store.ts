import { create } from "zustand";
import { Store } from "./_interface";

export const useProduct = create<Store>((set) => ({
   viewingProduct: null,
   setViewingProduct(value) {
      set({ viewingProduct: value });
   },
   search: null,
   setSearch(value) {
      set({ search: value });
   },
}));
