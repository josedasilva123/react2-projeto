import { useCart } from "../../../../stores/useCart/store";
import { Modal } from "../Modal";

export function CartModal(){
    const isCartVisible = useCart(store => store.isCartVisible);
    const setIsCartVisible = useCart(store => store.setIsCartVisible);

    return isCartVisible ? (
        <Modal onClose={() => setIsCartVisible(false)}>
            <h2>Carrinho</h2>
            <ul>
                {/* componentes CartProductCard */}
            </ul>
            <div>
                <p>Total:</p>
                <p>R$ 200,00</p>
                <button>Finalizar a compra</button>
            </div>
        </Modal>
    ) : null;
}