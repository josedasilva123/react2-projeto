import { useCart } from "../../../../stores/useCart/store";
import { useProduct } from "../../../../stores/useProduct/store";
import { toMoney } from "../../../../utils/toMoney";
import { Modal } from "../Modal";
import styles from "./style.module.scss";

export function ProductModal() {
  const viewingProduct = useProduct((store) => store.viewingProduct);
  const setViewingProduct = useProduct((store) => store.setViewingProduct);
  const addProduct = useCart((store) => store.addProduct);

  function handleClick() {
    addProduct(viewingProduct!);
    setViewingProduct(null);
  }

  return viewingProduct ? (
    <Modal className={styles.modal} onClose={() => setViewingProduct(null)}>
      <div className={styles.box}>
        <img
          src={viewingProduct.img}
          alt={`Ilustração do produto ${viewingProduct.name}`}
        />
        <div>
          <h3 className="title three">{viewingProduct.name}</h3>
          <p className="text small">{toMoney(viewingProduct.price)}</p>
          <button className="button two" onClick={handleClick}>
            Adicionar
          </button>
        </div>
      </div>
    </Modal>
  ) : null;
}
