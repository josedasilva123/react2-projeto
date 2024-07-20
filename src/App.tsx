import { CartModal } from "./components/fragments/modals/CartModal";
import { ProductModal } from "./components/fragments/modals/ProductModal";
import { Template } from "./components/template/Template";
import { HomePage } from "./pages/HomePage";
import "swiper/css";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.scss";
import { ToastContainer } from "react-toastify";

function App() {
   return (
      <>
         <Template>
            <HomePage />
            <CartModal />
            <ProductModal />
         </Template>
         <ToastContainer position="bottom-right" autoClose={2500} />
      </>
   );
}

export default App;
