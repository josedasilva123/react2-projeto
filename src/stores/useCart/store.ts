import { create } from "zustand";
import { ICartProduct, IProduct } from "../../interfaces/product.interface";

interface Store{
    count: number;
    isCartVisible: boolean;   
    setIsCartVisible: (value: boolean) => void;
    cartProductList: ICartProduct[],
    addProduct: (product: IProduct) => void;
    removeProduct: (removingId: number) => void;
}

export const useCart = create<Store>((set) => ({
    count: 1,
    isCartVisible: false,
    setIsCartVisible(value) {
        
    },
    cartProductList: [],
    addProduct(product) {
        
    },
    removeProduct(removingId) {
        
    },
}));