import { IProduct } from "../interfaces/product.interface";
import Produto1 from "../assets/Produto1.jpg";
import Produto2 from "../assets/Produto2.jpg";
import Produto3 from "../assets/Produto3.jpg";
import Produto4 from "../assets/Produto4.jpg";

export const productList: IProduct[] = [
   {
      id: 1,
      name: "Casaco",
      price: 300,
      img: Produto1,
   },
   {
      id: 2,
      name: "Camisa",
      price: 250,
      img: Produto2,
   },
   {
      id: 3,
      name: "Vestido",
      price: 350,
      img: Produto3,
   },
   {
      id: 4,
      name: "Conjunto",
      price: 350,
      img: Produto4,
   },
   {
      id: 5,
      name: "Casaco 2",
      price: 420,
      img: Produto1,
   },
   {
      id: 6,
      name: "Camisa 2",
      price: 175,
      img: Produto2,
   },
];
