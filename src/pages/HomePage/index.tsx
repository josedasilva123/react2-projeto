import { CartModal } from "../../components/fragments/modals/CartModal";
import { BannerSection } from "../../components/sections/BannerSection";
import { ProductsSection } from "../../components/sections/ProductsSection";

export function HomePage(){
    return(
        <>
            <BannerSection />
            <ProductsSection />
            <CartModal />
        </>
    )
}