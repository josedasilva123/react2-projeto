import { productList } from "../../../data/product.data";
import { ProductCard } from "../../fragments/ProductCard";

export function ProductsSection() {
   return (
      <section>
         <h2>Produtos</h2>
         <div>
            {productList.map((product) => (
               <ProductCard key={product.id} product={product} />
            ))}
         </div>
      </section>
   );
}
