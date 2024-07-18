import { create } from "zustand";
import { ICartProduct, IProduct } from "../../interfaces/product.interface";

interface Store {
   count: number;
   isCartVisible: boolean;
   setIsCartVisible: (value: boolean) => void;
   cartProductList: ICartProduct[];
   removingProduct: ICartProduct | null;
   setRemovingProduct: (value: ICartProduct | null) => void;
   addProduct: (product: IProduct) => void;
   decrementProduct: (removingId: number) => void;
}

export const useCart = create<Store>((set) => ({
   count: 1,
   isCartVisible: false,
   setIsCartVisible(value) {
      set({ isCartVisible: value });
   },
   removingProduct: null,
   setRemovingProduct(value) {
       set({ removingProduct: value });
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
   decrementProduct(removingId) {
    set(({ cartProductList }) => {
        const product = cartProductList.find(cartProduct => cartProduct.id === removingId) as ICartProduct;

        if(product.quantity > 1){
            const newCartProductList = cartProductList.map(cartProduct => {
                if(cartProduct.id === product.id){
                    return { ...cartProduct, quantity: cartProduct.quantity - 1};
                } else {
                   return cartProduct; 
                }
            });

            return { cartProductList: newCartProductList };
        } else {
           return { removingProduct: product }; 
        }
    });    
   },
}));
