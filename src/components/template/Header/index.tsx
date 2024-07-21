import Logo from "../../../assets/LogoPreta.svg";
import { useCart } from "../../../stores/useCart/store";
import { SearchForm } from "../../forms/SearchForm";

export function Header() {
  const setIsCartVisible = useCart((store) => store.setIsCartVisible);

  return (
    <header>
      <div className="container">
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
        <SearchForm />
        <button
          className="round-button"
          onClick={() => setIsCartVisible(true)}
          aria-label="cart"
        >
          <span className="material-symbols-outlined">shopping_bag</span>
        </button>
        <hr className="divisor" />
      </div>
    </header>
  );
}
