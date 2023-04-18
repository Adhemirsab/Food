import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipe } from "../../redux/actions";
import { useParams } from "react-router-dom";

function Detail() {
  const dispatch = useDispatch();
  let { id } = useParams();
  console.log(id);

  const myRecipe = useSelector((state) => state.recipe);
  //   console.log(myRecipe[0].name);
  useEffect(() => {
    dispatch(getRecipe(id));
  }, [id]);

  return (
    <div>
      {/* {myRecipe && (
        <div>
          <h1>{myRecipe[0].name}</h1>
          <img
            src={myRecipe[0].image}
            alt="imagen"
            width="500px"
            height="700px"
          />
        </div>
      )} */}
    </div>
  );
}

export default Detail;
