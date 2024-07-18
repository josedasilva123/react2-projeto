import Logo from "../../../assets/LogoPreta.svg";
import { useCart } from "../../../stores/useCart/store";
import { SearchForm } from "../../forms/SearchForm";

export function Header() {
   const setIsCartVisible = useCart(store => store.setIsCartVisible);

   return (
      <header>
         <img src={Logo} alt="Logo preta The Clothstore" />
         <nav>
            <ul>
               <li>
                  <a href="">produtos</a>
               </li>
            </ul>
         </nav>
         <SearchForm />
         <button onClick={() => setIsCartVisible(true)}>Abrir carrinho</button>
      </header>
   );
}
