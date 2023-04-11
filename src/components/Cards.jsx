//import { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import data from "../data/logements.json";

const Cards = () => {
  return (
    <div className="bloc-cards">
      {data.map((house) => (
        <Link key={house.id} to={`/logement/${house.id}`}>
          <Card house={house} />
        </Link>
      ))}
    </div>
  );
};

export default Cards;
