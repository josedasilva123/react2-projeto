import Logo from "../../../assets/LogoPreta.svg";
import { SearchForm } from "../../forms/SearchForm";

export function Header() {
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
         <button>Abrir carrinho</button>
      </header>
   );
}
