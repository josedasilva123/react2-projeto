import Foto1 from "../../../assets/FotoBanner1.jpg";
import Foto2 from "../../../assets/FotoBanner2.jpg";
import Foto3 from "../../../assets/FotoBanner3.jpg";
import styles from "./style.module.scss";

export function BannerSection() {
  return (
    <section className="section-p">
      <div className="container">
        <div className={styles.box}>
          <img className={styles.elem1} src={Foto1} alt="Foto sobre moda 1" />
          <img className={styles.elem2} src={Foto2} alt="Foto sobre moda 2" />
          <img className={styles.elem3} src={Foto3} alt="Foto sobre moda 3" />
          <div className={styles.elem4}>
            <h1 className="title one">Clothstore</h1>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a className="button one" href="#">
              Ver mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
