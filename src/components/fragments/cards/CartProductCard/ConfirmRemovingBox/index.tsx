import { useCart } from "../../../../../stores/useCart/store";
import styles from "./style.module.scss";

interface Props {
   productId: number;
}

export function ConfirmRemovingBox({ productId }: Props) {
   const removingProduct = useCart((store) => store.removingProduct);
   const setRemovingProduct = useCart((store) => store.setRemovingProduct);
   const removeProduct = useCart((store) => store.removeProduct);

   return removingProduct?.id === productId ? (
      <div className={`background-white ${styles.box}`} role="dialog">
         <p className="text small">Tem certeza que deseja remover este item do carrinho?</p>
         <div>
            <button className="button two" onClick={removeProduct}>Sim</button>
            <button className="link" onClick={() => setRemovingProduct(null)}>Não</button>
         </div>
      </div>
   ) : null;
}
