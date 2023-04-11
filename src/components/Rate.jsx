import React from "react";
import EmptyStar from "../images/empty_star.png";
import Star from "../images/star.png";

const Rate = ({ scoreValue }) => {
  const ratingStar = [1, 2, 3, 4, 5];

  return (
    <div>
      {ratingStar.map((level) =>
        scoreValue >= level ? (
          <img
            key={level.toString()}
            className="star"
            src={Star}
            alt="rating star"
          />
        ) : (
          <img
            key={level.toString()}
            className="star"
            src={EmptyStar}
            alt="rating star"
          />
        )
      )}
    </div>
  );
};

export default Rate;
