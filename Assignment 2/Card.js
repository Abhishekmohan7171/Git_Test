import React from "react";

function Card(props) {
  return (
    <div className="Container">
      <div className="image">
        <img src={props.img} alt="display image" />
      </div>

      <div className="title">{props.title}</div>

      <div className="subtitle">{props.subtitle}</div>

      <div className="desc">{props.desc}</div>

      <div>
        <button>Read More</button>
      </div>
    </div>
  );
}

export default Card;
