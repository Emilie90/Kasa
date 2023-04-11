import React from "react";

const Card = ({ house }) => {
  return (
    <div className="card">
      <img src={house.cover} alt="appart" />
      <div className="card__layer">
        <p className="card__title">{house.title}</p>
      </div>
    </div>
  );
};

export default Card;
