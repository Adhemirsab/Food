import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets } from "../../redux/actions";
import { Link, useHistory } from "react-router-dom";
import styles from "./RecipeCreate.module.css";
import validationCreate from "./validationCreate";
import { useCreate } from "../../hooks/useCreate";
import Loaderr from "../../helpers/Loaderr";
import Message from "../../helpers/Message";

// function validate(input) {

// }

function RecipeCreate() {
  const initialForm = {
    name: "",
    image: "",
    summary: "",
    healthScore: "",
    steps: "",
    diets: [],
  };
  const {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleCheck,
    loading,
    response,
  } = useCreate(initialForm, validationCreate);

  const dispatch = useDispatch();
  // const history = useHistory();
  const diets = useSelector((state) => state.diets);

  useEffect(() => {
    dispatch(getDiets());
  }, []);

  return (
    <div>
      <Link to="/home">
        <button>Volver</button>
      </Link>
      <h1>Crea tu receta</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            id="name"
            type="text"
            value={form.name}
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Escribe nombre de la receta"
            required
          />
          {errors.name && <p className={styles.error}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            id="image"
            type="text"
            value={form.image}
            name="image"
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.image && <p className={styles.error}>{errors.image}</p>}
        </div>
        <div>
          <label htmlFor="summary">Summary:</label>
          <textarea
            id="summary"
            value={form.summary}
            name="summary"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Escribe un resumen de la receta"
            cols="50"
            row="5"
            required
          ></textarea>
          {errors.summary && <p className={styles.error}>{errors.summary}</p>}
        </div>
        <div>
          <label htmlFor="healthScore">healthScore:</label>
          <input
            id="healthScore"
            type="number"
            value={form.healthScore}
            name="healthScore"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="introduzca el nivel de salud"
            required
          />
          {errors.healthScore && (
            <p className={styles.error}>{errors.healthScore}</p>
          )}
        </div>
        <div>
          <label htmlFor="steps">steps:</label>
          <input
            id="steps"
            type="text"
            value={form.steps}
            name="steps"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="indique los pasos de la receta"
            required
          />
          {errors.steps && <p className={styles.error}>{errors.steps}</p>}
        </div>

        <div>
          <label>diets:</label>
          {diets &&
            diets.map((diet, index) => {
              return (
                <label key={index}>
                  <input
                    type="checkbox"
                    value={diet.id}
                    name="diet"
                    onChange={handleCheck}
                    onBlur={handleBlur}
                  />
                  {diet.name}
                </label>
              );
            })}
          {errors.diets && <p className={styles.error}>{errors.diets}</p>}
        </div>
        <input type="submit" value="Crear Receta" />
      </form>
      {loading && <Loaderr />}
      {response && (
        <Message msg="La receta fue creada exitosamente" bgColor="#198754" />
      )}
    </div>
  );
}

export default RecipeCreate;
