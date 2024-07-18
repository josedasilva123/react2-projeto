import { CartModal } from "./components/fragments/modals/CartModal";
import { Template } from "./components/template/Template";
import { HomePage } from "./pages/HomePage";
import "./style.css";
import 'swiper/css';

function App() {
   return (
      <Template>
         <HomePage />
         <CartModal />
      </Template>
   );
}

export default App;
