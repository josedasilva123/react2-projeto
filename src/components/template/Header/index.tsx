import Logo from "../../../assets/LogoPreta.svg";

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
         {/* formulário de busca */}
         <button>Abrir carrinho</button>
      </header>
   );
}
