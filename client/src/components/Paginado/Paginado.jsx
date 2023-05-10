import React from "react";
import styles from "./Paginado.module.css";

function Paginado({ recipesPerPage, allRecipes, paginado }) {
  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(allRecipes / recipesPerPage); i++) {
    pageNumbers.push(i + 1);
  }
  return (
    <nav>
      <ul className={styles.paginado}>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li className={styles.paginado__lista} key={number}>
              <a onClick={() => paginado(number)}>{number}</a>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default Paginado;
