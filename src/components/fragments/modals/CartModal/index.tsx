import { useCart } from "../../../../stores/useCart/store";
import { toMoney } from "../../../../utils/toMoney";
import { CartProductCard } from "../../cards/CartProductCard";
import { Modal } from "../Modal";
import styles from "./style.module.scss";

export function CartModal() {
  const isCartVisible = useCart((store) => store.isCartVisible);
  const setIsCartVisible = useCart((store) => store.setIsCartVisible);
  const cartProductList = useCart((store) => store.cartProductList);

  const total = cartProductList.reduce((accValue, cartProduct) => {
    return accValue + cartProduct.price * cartProduct.quantity;
  }, 0);

  return isCartVisible ? (
    <Modal className={styles.modal} onClose={() => setIsCartVisible(false)}>
      <div>
        <h2 className="title two">Carrinho</h2>

        {cartProductList.length > 0 ? (
          <ul>
            {cartProductList.map((cartProduct) => (
              <CartProductCard key={cartProduct.id} product={cartProduct} />
            ))}
          </ul>
        ) : (
          <p className="text small">Nenhum produto adicionado.</p>
        )}
      </div>

      <div className={styles.bottom}>
        <div>
          <p className="text small">Total:</p>
          <p className="text small bold">{toMoney(total)}</p>
        </div>

        <button className="button one full">Finalizar a compra</button>
      </div>
    </Modal>
  ) : null;
}
