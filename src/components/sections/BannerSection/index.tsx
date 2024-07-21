import Foto1 from "../../../assets/FotoBanner1.jpg";
import Foto2 from "../../../assets/FotoBanner2.jpg";
import Foto3 from "../../../assets/FotoBanner3.jpg";

export function BannerSection() {
  return (
    <section className="section-p">
      <div className="container">
        <img src={Foto1} alt="Foto sobre moda 1" />
        <img src={Foto2} alt="Foto sobre moda 2" />
        <img src={Foto3} alt="Foto sobre moda 3" />
        <div>
          <h1 className="title one">Clothstore</h1>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <a className="button one" href="#">
            Ver mais
          </a>
        </div>
      </div>
    </section>
  );
}
