import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.toolbar}>
      <nav className={styles.toolbar_nav}>
        <div className={styles.toolbar_logo}>
          <Link to="/">
            <span>Sabores del Mundo</span>
          </Link>
        </div>
        <ul className={styles.toolbar_list}>
          <li>
            <Link to="/home">Recetas</Link>
          </li>
          <li>
            <Link to="">About</Link>
          </li>
          <li>
            <Link to="">Dietas</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.toolbar_button}>
        <Link to="/recipes">
          <button>Crear receta</button>
        </Link>
        <Link to="/register">
          <button>Registrate</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
