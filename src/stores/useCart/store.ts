import { create } from "zustand";
import { ICartProduct } from "../../interfaces/product.interface";
import { Store } from "./_interface";
import { toast } from "react-toastify";

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

         if (existingProduct) {
            const newCartProductList = cartProductList.map((cartProduct) => {
               if (cartProduct.id === existingProduct.id) {
                  return { ...cartProduct, quantity: cartProduct.quantity + 1 };
               } else {
                  return cartProduct;
               }
            });

            return { cartProductList: newCartProductList };
         } else {
            const newCartProduct: ICartProduct = {
               ...product,
               quantity: 1,
            };

            toast.success("Produto adicionado com sucesso");

            return { cartProductList: [...cartProductList, newCartProduct] };
         }
      });
   },

   decrementProduct(removingId) {
      set(({ cartProductList }) => {
         const product = cartProductList.find(
            (cartProduct) => cartProduct.id === removingId
         ) as ICartProduct;

         if (product.quantity > 1) {
            const newCartProductList = cartProductList.map((cartProduct) => {
               if (cartProduct.id === product.id) {
                  return { ...cartProduct, quantity: cartProduct.quantity - 1 };
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

   removeProduct() {
      set(({ cartProductList, removingProduct }) => {
         const newCartProductList = cartProductList.filter(
            (cartProduct) => cartProduct.id !== removingProduct?.id
         );

         toast.success("Produto removido com sucesso.");

         return { cartProductList: newCartProductList, removingProduct: null };
      });
   },
}));
