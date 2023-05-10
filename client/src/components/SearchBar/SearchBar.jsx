import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameRecipes } from "../../redux/actions";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getNameRecipes(name));
  };
  return (
    <div className={styles.search}>
      <input
        className={styles.search_input}
        type="text"
        placeholder="Buscar una receta..."
        onChange={(event) => handleInputChange(event)}
      />
      <button
        type="submit"
        onClick={(event) => handleSubmit(event)}
        className={styles.search_button}
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
