import { ICartProduct } from "../../../../interfaces/product.interface"

interface Props{
    product: ICartProduct;
}

export function CartProductCard({ product }: Props){
    return(
        <li>
            <img src={product.img} alt={`Ilustração do produto ${product.name}`} />
            <div>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
            </div>
            <div>
                <button>-</button>
                <span>{product.quantity}</span>
                <button>+</button>
            </div>
        </li>
    )
}