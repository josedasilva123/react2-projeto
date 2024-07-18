import { useCart } from "../../../../stores/useCart/store";
import { useProduct } from "../../../../stores/useProduct/store";
import { Modal } from "../Modal";

export function ProductModal() {
   const viewingProduct = useProduct(store => store.viewingProduct);
   const setViewingProduct = useProduct(store => store.setViewingProduct);
   const addProduct = useCart(store => store.addProduct);

   return viewingProduct ? (
      <Modal onClose={() => setViewingProduct(null)}>
         <div>
            <img src={viewingProduct.img} alt={`Ilustração do produto ${viewingProduct.name}`} />
            <div>
               <h3>{viewingProduct.name}</h3>
               <p>{viewingProduct.price}</p>
               <button onClick={() => addProduct(viewingProduct)}>Adicionar</button>
            </div>
         </div>
      </Modal>
   ) : null;
}
