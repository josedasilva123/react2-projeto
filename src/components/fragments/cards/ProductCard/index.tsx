import { IProduct } from "../../../../interfaces/product.interface";
import { useCart } from "../../../../stores/useCart/store";
import { useProduct } from "../../../../stores/useProduct/store";
import { toMoney } from "../../../../utils/toMoney";

interface Props {
   product: IProduct;
}

export function ProductCard({ product }: Props) {
   const setViewingProduct = useProduct((store) => store.setViewingProduct);
   const addProduct = useCart((store) => store.addProduct);

   return (
      <li>
         <img src={product.img} alt={`Ilustração do produto ${product.name}`} />
         <div>
            <h3 className="title three">{product.name}</h3>
            <p className="text small">{toMoney(product.price)}</p>
         </div>
         <div>
            <button onClick={() => addProduct(product)}>Adicionar</button>
            <button onClick={() => setViewingProduct(product)}>
               <span className="material-symbols-outlined">visibility</span>
            </button>
         </div>
      </li>
   );
}
