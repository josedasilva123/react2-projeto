import { create } from "zustand";
import { ICartProduct, IProduct } from "../../interfaces/product.interface";

interface Store {
   count: number;
   isCartVisible: boolean;
   setIsCartVisible: (value: boolean) => void;
   cartProductList: ICartProduct[];
   addProduct: (product: IProduct) => void;
   removeProduct: (removingId: number) => void;
}

export const useCart = create<Store>((set) => ({
   count: 1,
   isCartVisible: false,
   setIsCartVisible(value) {
      set({ isCartVisible: value });
   },
   cartProductList: [],
   addProduct(product) {
      set(({ cartProductList }) => {
         const existingProduct = cartProductList.find(
            (cartProduct) => cartProduct.id === product.id
         );

         if(existingProduct){
            const newCartProductList = cartProductList.map(cartProduct => {
                if(cartProduct.id === existingProduct.id){
                    return { ...cartProduct, quantity: cartProduct.quantity + 1 };
                } else {
                    return cartProduct;
                }
            });

            return { cartProductList: newCartProductList };
         } else {
            const newCartProduct: ICartProduct = {
                ...product, quantity: 1
            }

            return { cartProductList: [...cartProductList, newCartProduct]};
         }
      });
   },
   removeProduct(removingId) {},
}));
