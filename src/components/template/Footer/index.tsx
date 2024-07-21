import Logo from "../../../assets/LogoBranca.svg";
import styles from "./style.module.scss";

export function Footer() {
  return (
    <footer className="background-black">
      <div className="container">
        <div className={styles.box}>
          <img src={Logo} alt="Logo branca The Clothstore" />
        </div>
      </div>
    </footer>
  );
}
