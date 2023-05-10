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
    image: null,
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
    handleFile,
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
    <div className={styles.container}>
      <div className={styles.form__container}>
        <h1 className={styles.form__title}>Crea tu receta</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputBox}>
            <label htmlFor="name" className={styles.form__labelRecipe}>
              Titulo de la receta
            </label>
            <input
              className={styles.form__inputRecipe}
              id="name"
              type="text"
              value={form.name}
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              // placeholder="Escribe nombre de la receta"
              required
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="image" className={styles.form__labelRecipe}>
              Imagen
            </label>
            <input
              className={styles.form__inputImage}
              id="image"
              type="file"
              // value={form.image}
              name="image"
              onChange={handleFile}
              onBlur={handleBlur}
              required
            />
            {errors.image && <p className={styles.error}>{errors.image}</p>}
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="summary" className={styles.form__labelRecipe}>
              Descripcion de la receta:
            </label>
            <textarea
              className={styles.textareaRecipe}
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
          <div className={styles.inputBox}>
            <label htmlFor="healthScore" className={styles.form__labelRecipe}>
              Nivel de salud
            </label>
            <input
              className={styles.form__inputRecipe}
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
          <div className={styles.inputBox}>
            <label htmlFor="steps" className={styles.form__labelRecipe}>
              Pasos
            </label>
            <input
              className={styles.form__inputRecipe}
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

          <div className={styles.inputBox}>
            <label>Dietas</label>
            {diets &&
              diets.map((diet, index) => {
                return (
                  <label key={index}>
                    <input
                      type="checkbox"
                      value={diet.id}
                      name="diets"
                      onChange={handleCheck}
                      onBlur={handleBlur}
                    />
                    {diet.name}
                  </label>
                );
              })}
            {errors.diets && <p className={styles.error}>{errors.diets}</p>}
          </div>
          <input
            className={styles.form_button}
            type="submit"
            value="Crear Receta"
          />
        </form>
        {loading && <Loaderr />}
        {response && <Message msg="La receta fue creada exitosamente" />}
      </div>
    </div>
  );
}

export default RecipeCreate;
