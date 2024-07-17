import { IProduct } from "../../../../interfaces/product.interface";
import { Modal } from "../Modal";

interface Props {
   product: IProduct;
}

export function ProductModal({ product }: Props) {
   return (
      <Modal onClose={() => console.log("Fechar")}>
         <div>
            <img src={product.img} alt={`Ilustração do produto ${product.name}`} />
            <div>
               <h3>{product.name}</h3>
               <p>{product.price}</p>
               <button>Adicionar</button>
            </div>
         </div>
      </Modal>
   );
}
