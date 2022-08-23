import React from "react";
import { Link } from "react-router-dom";

const MealCard = ({ to, image, name }) => {
  return (
    <div className=" d-flex col-lg-3 col-md-4 col-12 justify-content-center mb-4">
      <Link
        to={to}
        className="cardBody d-flex justify-content-center align-items-center text-decoration-none text-dark"
      >
        <div className="card p-2">
          <img
            src={image}
            className="card-img-top "
            alt="meal-image"
            loading="lazy"
          />
          <div className="card-body">
            <h5 className="card-title text-center">{name.trim().slice(0,25)}...</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MealCard;
