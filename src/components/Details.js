import React from "react";
import "../css/Detail.css";

const Details = (props) => {
  console.log(props);
  const title = props.location.state.title;
  const img = props.location.state.img;
  const ingrs = props.location.state.ingrs;
  return (
    <div className='detail'>
      <h2>{title}</h2>
      <img src={img} alt='' />
      <ul>
        <h3>Ingredients</h3>
        {ingrs.map((ingr, i) => (
          <li key={i}>{ingr.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Details;
