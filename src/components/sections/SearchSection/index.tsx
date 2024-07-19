import { productList } from "../../../data/product.data";
import { useProduct } from "../../../stores/useProduct/store";
import { ProductCard } from "../../fragments/cards/ProductCard";

export function SearchSection() {
   const search = useProduct((store) => store.search);
   const setSearch = useProduct((store) => store.setSearch);

   const searchTerm = search ? search : "";

   const searchResults = productList.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
   );

   return (
      <section>
         <h2>Resultados de busca para: {search}</h2>
         <button onClick={() => setSearch(null)}>Limpar busca</button>
         {searchResults.length > 0 ? (
            <ul>
               {searchResults.map((product) => (
                  <ProductCard key={product.id} product={product} />
               ))}
            </ul>
         ) : (
            <p>Nenhum resultado encontrado.</p>
         )}
      </section>
   );
}
