import { productList } from "../../../data/product.data";
import { useProduct } from "../../../stores/useProduct/store";
import { ProductCard } from "../../fragments/cards/ProductCard";
import styles from "./style.module.scss";

export function SearchSection() {
  const search = useProduct((store) => store.search);
  const setSearch = useProduct((store) => store.setSearch);

  const searchTerm = search ? search : "";

  const searchResults = productList.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="produtos" className={`section-p ${styles.section}`}>
      <div className="container">
        <div className={styles.box}>
          <h2 className="title two">Resultados de busca para: {search}</h2>
          <button className="button two" onClick={() => setSearch(null)}>
            Limpar busca
          </button>
        </div>

        {searchResults.length > 0 ? (
          <ul className={styles.list}>
            {searchResults.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        ) : (
          <p className="text">Nenhum resultado encontrado.</p>
        )}
      </div>
    </section>
  );
}
