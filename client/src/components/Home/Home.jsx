import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRecipes,
  filterRecipeByDiet,
  filterByApiBd,
  orderByName,
} from "../../redux/actions";
import { Link } from "react-router-dom";

import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBar/SearchBar";
function Home() {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);
  const [order, setOrder] = useState("");
  // paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipePerPage] = useState(9);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = allRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getRecipes());
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(getRecipes());
  };

  const handlerFilterDiet = (event) => {
    dispatch(filterRecipeByDiet(event.target.value));
  };
  const handlerFilterDbApi = (event) => {
    dispatch(filterByApiBd(event.target.value));
  };

  const handleSort = (event) => {
    dispatch(orderByName(event.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${event.target.value}`);
  };
  return (
    <div>
      <Link to="/recipes">Crear Receta</Link>
      <h1>Aguante recetas</h1>
      <button onClick={(event) => handleClick(event)}>
        volver a cargar recetas
      </button>
      <div>
        <select onChange={(event) => handleSort(event)}>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
        <select onChange={(event) => handlerFilterDiet(event)}>
          <option value="All">Todos</option>
          <option value="vegan">vegan</option>
          <option value="gluten free">gluten free</option>
          <option value="dairy free">dairy free</option>
          <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
          <option value="paleolithic">paleolithic</option>
          <option value="primal">primal</option>
          <option value="whole 30">whole 30</option>
        </select>
        <select onChange={(event) => handlerFilterDbApi(event)}>
          <option value="all">todos</option>
          <option value="created">Creados</option>
          <option value="api">Existente</option>
        </select>
        <select>
          <option value="health score">comida saludable</option>
          <option value="">BD</option>
        </select>
      </div>
      <Paginado
        recipesPerPage={recipesPerPage}
        allRecipes={allRecipes.length}
        paginado={paginado}
      />
      <SearchBar />
      {currentRecipes &&
        currentRecipes.map((obj, index) => {
          return (
            <Card
              key={index}
              name={obj.name}
              image={obj.image}
              diets={obj.diets}
              id={obj.id}
            />
          );
        })}
    </div>
  );
}

export default Home;
