import { useProduct } from "../../../../stores/useProduct/store";
import { Modal } from "../Modal";

export function ProductModal() {
   const viewingProduct = useProduct(store => store.viewingProduct);
   const setViewingProduct = useProduct(store => store.setViewingProduct);

   return viewingProduct ? (
      <Modal onClose={() => setViewingProduct(null)}>
         <div>
            <img src={viewingProduct.img} alt={`Ilustração do produto ${viewingProduct.name}`} />
            <div>
               <h3>{viewingProduct.name}</h3>
               <p>{viewingProduct.price}</p>
               <button>Adicionar</button>
            </div>
         </div>
      </Modal>
   ) : null;
}
