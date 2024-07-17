import Foto1 from "../../../assets/FotoBanner1.jpg";
import Foto2 from "../../../assets/FotoBanner2.jpg";
import Foto3 from "../../../assets/FotoBanner3.jpg";

export function BannerSection() {
   return (
      <section>
         <img src={Foto1} alt="Foto sobre moda 1" />
         <img src={Foto2} alt="Foto sobre moda 2" />
         <img src={Foto3} alt="Foto sobre moda 3" />
         <div>
            <h1>Clothstore</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#">
                Ver mais
            </a>
         </div>
      </section>
   );
}
