import { useCart } from "../../../../stores/useCart/store";
import { CartProductCard } from "../../cards/CartProductCard";
import { Modal } from "../Modal";

export function CartModal() {
   const isCartVisible = useCart((store) => store.isCartVisible);
   const setIsCartVisible = useCart((store) => store.setIsCartVisible);
   const cartProductList = useCart((store) => store.cartProductList);

   return isCartVisible ? (
      <Modal onClose={() => setIsCartVisible(false)}>
         <h2>Carrinho</h2>

         {cartProductList.length > 0 ? (
            <ul>
               {cartProductList.map((cartProduct) => (
                  <CartProductCard key={cartProduct.id} product={cartProduct} />
               ))}
            </ul>
         ) : (
            <p>Nenhum produto adicionado.</p>
         )}

         <div>
            <p>Total:</p>
            <p>R$ 200,00</p>
            <button>Finalizar a compra</button>
         </div>
      </Modal>
   ) : null;
}
