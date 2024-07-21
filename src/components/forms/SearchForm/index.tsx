import { FormEvent, useState } from "react";
import { useProduct } from "../../../stores/useProduct/store";
import styles from "./style.module.scss";

export function SearchForm() {
   const [value, setValue] = useState("");

   const setSearch = useProduct((store) => store.setSearch);

   function submit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
      setSearch(value);
      setValue("");
   }

   return (
      <form className={styles.form} onSubmit={submit}>
         <button type="submit">
            <span className="material-symbols-outlined">search</span>
         </button>
         <input
            type="text"
            name="search"
            id="search"
            value={value}
            placeholder="Buscar ..."
            onChange={(e) => setValue(e.target.value)}
         />
      </form>
   );
}
