import { productList } from "../../../data/product.data";
import { ProductCard } from "../../fragments/cards/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

export function ProductsSection() {
  return (
    <section>
      <div className="container">
        <h2 className="title one">Produtos</h2>
        <Swiper
          grabCursor
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          slidesPerView={1}
          spaceBetween={40}
          breakpoints={{
            400: {
              slidesPerView: 2,
            },
            750: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {productList.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
