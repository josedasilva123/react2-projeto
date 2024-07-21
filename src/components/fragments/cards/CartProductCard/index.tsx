import { ICartProduct } from "../../../../interfaces/product.interface";
import { useCart } from "../../../../stores/useCart/store";
import { toMoney } from "../../../../utils/toMoney";
import { ConfirmRemovingBox } from "./ConfirmRemovingBox";
import styles from "./style.module.scss";

interface Props {
  product: ICartProduct;
}

export function CartProductCard({ product }: Props) {
  const addProduct = useCart((store) => store.addProduct);
  const decrementProduct = useCart((store) => store.decrementProduct);

  return (
    <li className={styles.card}>
      <div className={styles.left}>
        <img src={product.img} alt={`Ilustração do produto ${product.name}`} />
        <div>
          <h3 className="title three">{product.name}</h3>
          <p className="text small">{toMoney(product.price)}</p>
        </div>
      </div>

      <div className={styles.right}>
        <button
          onClick={() => decrementProduct(product.id)}
          aria-label="remover"
        >
          <span className="material-symbols-outlined">remove</span>
        </button>
        <span className="text small">{product.quantity}</span>
        <button onClick={() => addProduct(product)} aria-label="add">
          <span className="material-symbols-outlined">add</span>
        </button>
      </div>
      <ConfirmRemovingBox productId={product.id} />
    </li>
  );
}
