import { ICartProduct } from "../../../../interfaces/product.interface";
import { useCart } from "../../../../stores/useCart/store";
import { toMoney } from "../../../../utils/toMoney";
import { ConfirmRemovingBox } from "./ConfirmRemovingBox";

interface Props {
   product: ICartProduct;
}

export function CartProductCard({ product }: Props) {
   const addProduct = useCart((store) => store.addProduct);
   const decrementProduct = useCart((store) => store.decrementProduct);

   return (
      <li>
         <img src={product.img} alt={`Ilustração do produto ${product.name}`} />
         <div>
            <h3>{product.name}</h3>
            <p>{toMoney(product.price)}</p>
         </div>
         <div>
            <button onClick={() => decrementProduct(product.id)} aria-label="remover">
               <span className="material-symbols-outlined">remove</span>
            </button>
            <span>{product.quantity}</span>
            <button onClick={() => addProduct(product)} aria-label="add">
               <span className="material-symbols-outlined">add</span>
            </button>
         </div>
         <ConfirmRemovingBox productId={product.id} />
      </li>
   );
}
