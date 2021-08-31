import React from "react";

//hooks
const Recipe = ({ title, calories, img, ingrs }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={img} alt='' />
      <ul>
        {ingrs.map((ingr, i) => (
          <li key={i}>{ingr.text}</li>
        ))}
      </ul>
      <p>칼로리:{calories}</p>
    </div>
  );
};

export default Recipe;
