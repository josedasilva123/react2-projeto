import { IProduct } from "../../interfaces/product.interface";

export interface Store {
   viewingProduct: IProduct | null;
   setViewingProduct: (value: IProduct | null) => void;
   search: string | null;
   setSearch: (value: string | null) => void;
}
