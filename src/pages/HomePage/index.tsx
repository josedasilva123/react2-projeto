import { BannerSection } from "../../components/sections/BannerSection";
import { ProductsSection } from "../../components/sections/ProductsSection";
import { SearchSection } from "../../components/sections/SearchSection";
import { useProduct } from "../../stores/useProduct/store";

export function HomePage() {
  const search = useProduct((store) => store.search);

  return search ? (
    <SearchSection />
  ) : (
    <>
      <BannerSection />
      <div className="container">
        <hr className="divisor" />
      </div>
      <ProductsSection />
    </>
  );
}
