import { FormEvent, useState } from "react";
import { useProduct } from "../../../stores/useProduct/store";

export function SearchForm() {
   const [value, setValue] = useState("");

   const setSearch = useProduct((store) => store.setSearch);

   function submit(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    setSearch(value);
    setValue("");
   }

   return (
      <form onSubmit={submit}>
         <button type="submit">Buscar</button>
         <input
            type="text"
            name="search"
            id="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
         />
      </form>
   );
}
