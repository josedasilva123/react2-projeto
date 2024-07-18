import { ICartProduct } from "../../../../interfaces/product.interface"
import { useCart } from "../../../../stores/useCart/store";
import { toMoney } from "../../../../utils/toMoney";

interface Props{
    product: ICartProduct;
}

export function CartProductCard({ product }: Props){
    const addProduct = useCart((store) => store.addProduct);

    return(
        <li>
            <img src={product.img} alt={`Ilustração do produto ${product.name}`} />
            <div>
                <h3>{product.name}</h3>
                <p>{toMoney(product.price)}</p>
            </div>
            <div>
                <button>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => addProduct(product)}>+</button>
            </div>
        </li>
    )
}