import React from "react";
import { Link } from "react-router-dom";
//hooks
const Recipe = ({ title, calories, img, ingrs }) => {
  return (
    <div>
      <h2>
        <Link
          to={{
            pathname: "/details",
            state: {
              title: title,
              calories: calories,
              img: img,
              ingrs: ingrs,
            },
          }}>
          {title}
        </Link>
      </h2>
      <img src={img} alt='' />
      <p>칼로리:{calories}</p>
    </div>
  );
};

export default Recipe;
