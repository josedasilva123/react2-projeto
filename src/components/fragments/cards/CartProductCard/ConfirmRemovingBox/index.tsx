import { useCart } from "../../../../../stores/useCart/store";

interface Props {
   productId: number;
}

export function ConfirmRemovingBox({ productId }: Props) {
   const removingProduct = useCart((store) => store.removingProduct);
   const setRemovingProduct = useCart((store) => store.setRemovingProduct);
   const removeProduct = useCart((store) => store.removeProduct);

   return removingProduct?.id === productId ? (
      <div role="dialog">
         <p className="text small">Tem certeza que deseja remover este item do carrinho?</p>
         <div>
            <button onClick={removeProduct}>Sim</button>
            <button onClick={() => setRemovingProduct(null)}>Não</button>
         </div>
      </div>
   ) : null;
}
