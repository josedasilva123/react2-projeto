import { ICartProduct, IProduct } from "../../interfaces/product.interface";

export interface Store {
   count: number;
   isCartVisible: boolean;
   setIsCartVisible: (value: boolean) => void;
   cartProductList: ICartProduct[];
   removingProduct: ICartProduct | null;
   setRemovingProduct: (value: ICartProduct | null) => void;
   addProduct: (product: IProduct) => void;
   decrementProduct: (removingId: number) => void;
   removeProduct: () => void;
}
