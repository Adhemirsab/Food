import React from "react";
import { Link } from "react-router-dom";

function Card({ image, name, diets, id }) {
  return (
    <Link to={`/detail/${id}`}>
      <div>
        <h3>{name}</h3>
        {/* <h5>{name}</h5> */}
        <img src={image} alt="" width="200px" height="250px" />
        <div>
          {diets &&
            diets.map((diet, index) => {
              return <h3 key={index}>{diet.name ? diet.name : ""}</h3>;
            })}
        </div>
      </div>
    </Link>
  );
}

export default Card;
