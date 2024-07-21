import Logo from "../../../assets/LogoPreta.svg";
import { useCart } from "../../../stores/useCart/store";
import { SearchForm } from "../../forms/SearchForm";
import styles from "./style.module.scss";

export function Header() {
  const setIsCartVisible = useCart((store) => store.setIsCartVisible);

  return (
    <header>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.top}>
            <img src={Logo} alt="Logo preta The Clothstore" />
            <nav>
              <ul>
                <li>
                  <a className="menu-item" href="">
                    produtos
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.bottom}>
            <SearchForm />
            <button
              className="round-button"
              onClick={() => setIsCartVisible(true)}
              aria-label="cart"
            >
              <span className="material-symbols-outlined">shopping_bag</span>
            </button>
          </div>
        </div>

        <hr className="divisor" />
      </div>
    </header>
  );
}
