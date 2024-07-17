import { IProduct } from "../../../../interfaces/product.interface"

interface Props{
    product: IProduct;
}

export function ProductCard({ product }: Props){
    return(
        <li>
            <img src={product.img} alt={`Ilustração do produto ${product.name}`} />
            <div>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
            </div>
            <div>
                <button>Adicionar</button>
                <button>Visualizar</button>
            </div>
        </li>
    )
}