import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Home.module.css";
import {
  getRecipes,
  filterRecipeByDiet,
  filterByApiBd,
  orderByName,
  filterByHealthScore,
} from "../../redux/actions";

import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBar/SearchBar";
function Home() {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);
  // console.log(allRecipes.length);
  const allRecipesTotal = useSelector((state) => state.allRecipes);
  const [order, setOrder] = useState("");
  // paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipePerPage] = useState(9);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  // console.log(indexOfLastRecipe);
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  // console.log(indexOfFirstRecipe);

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

  const handleSort = (event) => {
    dispatch(orderByName(event.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${event.target.value}`);
  };

  const repit = () => {
    if (allRecipesTotal) {
      const healthScore = allRecipesTotal.map((recipe) => recipe.healthScore);
      const removeRepeated = [...new Set(healthScore)];
      return removeRepeated.sort((a, b) => b - a);
    }
  };
  const handlerFilterDiet = (event) => {
    dispatch(filterRecipeByDiet(event.target.value));
  };
  const handlerFilterDbApi = (event) => {
    dispatch(filterByApiBd(event.target.value));
  };

  const handleHealthScore = (event) => {
    dispatch(filterByHealthScore(event.target.value));
  };
  return (
    <div>
      <h1>Las mejores recetas del mundo</h1>
      <SearchBar />
      <button onClick={(event) => handleClick(event)}>
        volver a cargar recetas
      </button>
      <div className={styles.select}>
        <label htmlFor="alfabeto">Orden alfabetico </label>
        <select onChange={(event) => handleSort(event)} id="alfabeto">
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>

        <label htmlFor="dieta">Tipo de dieta </label>
        <select onChange={(event) => handlerFilterDiet(event)} id="dieta">
          <option value="All">Todos</option>
          <option value="vegan">vegan</option>
          <option value="gluten free">gluten free</option>
          <option value="dairy free">dairy free</option>
          <option value="lacto ovo vegetarian">lacto ovo vegetarian </option>
          <option value="paleolithic">paleolithic</option>
          <option value="primal">primal</option>
          <option value="whole 30">whole 30</option>
          <option value="vegetarian">vegetarian</option>
        </select>

        <label htmlFor="origen">Origen: </label>
        <select onChange={(event) => handlerFilterDbApi(event)} id="origen">
          <option value="all">todos</option>
          <option value="created">Creados</option>
          <option value="api">Existente</option>
        </select>

        <label htmlFor="healthScore">Choose a healthScore: </label>
        <select onChange={(event) => handleHealthScore(event)} id="healthScore">
          <option value="todos">todos</option>
          {allRecipesTotal &&
            repit().map((healthScore, index) => {
              return (
                <option key={index} value={healthScore}>
                  {healthScore}
                </option>
              );
            })}
        </select>
      </div>
      <div className={styles.container__cards}>
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
      <Paginado
        recipesPerPage={recipesPerPage}
        allRecipes={allRecipes.length}
        paginado={paginado}
      />
    </div>
  );
}

export default Home;
