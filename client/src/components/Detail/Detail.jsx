import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipe } from "../../redux/actions";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const dispatch = useDispatch();
  let { id } = useParams();

  const myRecipe = useSelector((state) => state.recipe);
  console.log(myRecipe);
  //   console.log(myRecipe[0].name);
  useEffect(() => {
    dispatch(getRecipe(id));
  }, [id]);

  const handleSteps = (recipe) => {
    const dietsArray = recipe.steps.split(".").filter((diets) => diets !== "");

    return dietsArray;
  };
  return (
    <div className={styles.container}>
      {myRecipe &&
        myRecipe.map((recipe, index) => (
          <div key={index} className={styles.detail__container}>
            <div className={styles.head__container}>
              <img src={recipe.image} alt="" />
              <h4>{recipe.name}</h4>
              <div className={styles.head__container_number}>
                <p>healthScore: {recipe.healthScore}</p>
                <p>id: {recipe.id}</p>
              </div>
              <button className={styles.head__container_button}>
                compartir
              </button>
            </div>
            <div className={styles.content__container}>
              <div className={styles.content__detail}>
                <h1>Resumen de la receta</h1>
                <p>{recipe.summary}</p>
              </div>

              <div className={styles.content__detail}>
                <h1>Pasos para preparar la receta</h1>
                <ol className={styles.content_list}>
                  {handleSteps(recipe).map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
                {/* <p>{recipe.steps}</p> */}
              </div>

              <div className={styles.content__detail}>
                <h1>Tipos de dieta</h1>
                <div>
                  {recipe.diets.map((diet, index) => (
                    <p key={index} className={styles.content__detail_diets}>
                      {typeof diet === "string" ? diet : diet.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Detail;
