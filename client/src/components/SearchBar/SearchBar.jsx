import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameRecipes } from "../../redux/actions";

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
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        onChange={(event) => handleInputChange(event)}
      />
      <button type="submit" onClick={(event) => handleSubmit(event)}>
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
