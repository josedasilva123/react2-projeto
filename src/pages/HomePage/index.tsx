import { ProductModal } from "../../components/fragments/modals/ProductModal";
import { BannerSection } from "../../components/sections/BannerSection";
import { ProductsSection } from "../../components/sections/ProductsSection";
import { productList } from "../../data/product.data";

export function HomePage(){
    return(
        <>
            <BannerSection />
            <ProductsSection />
            <ProductModal product={productList[0]} />
        </>
    )
}