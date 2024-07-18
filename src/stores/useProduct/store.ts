import { create } from "zustand";
import { IProduct } from "../../interfaces/product.interface";

interface Store{
    viewingProduct: IProduct | null;
    setViewingProduct: (value: IProduct | null) => void;
    search: string | null;
    setSearch: (value: string | null) => void;
}

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