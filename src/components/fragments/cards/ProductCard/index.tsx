import { IProduct } from "../../../../interfaces/product.interface";
import { useProduct } from "../../../../stores/useProduct/store";

interface Props {
   product: IProduct;
}

export function ProductCard({ product }: Props) {
   const setViewingProduct = useProduct((store) => store.setViewingProduct);

   return (
      <li>
         <img src={product.img} alt={`Ilustração do produto ${product.name}`} />
         <div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
         </div>
         <div>
            <button>Adicionar</button>
            <button onClick={() => setViewingProduct(product)}>Visualizar</button>
         </div>
      </li>
   );
}
