import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function Card({ image, name, diets, id }) {
  return (
    <div className={styles.card__container}>
      <div className={styles.card__image}>
        <img src={image} alt="" />
      </div>
      <div className={styles.card__content}>
        <h4>{name}</h4>
        {/* <h5>{name}</h5> */}
        <div className={styles.card__diets}>
          {diets &&
            diets.map((diet, index) => {
              return (
                <p className={styles.diets} key={index}>
                  {diet.name ? diet.name : diet}
                </p>
              );
            })}
        </div>

        <div className={styles.card__footer}>
          <Link to={`/detail/${id}`}>
            <button className={styles.card__button}>Leer Mas</button>
          </Link>
          <button className={styles.card__button}>Compartir</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
