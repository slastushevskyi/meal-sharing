import React from "react";
import MealReservationComponent from "./MealReservationComponent";
import ReviewComponent from "../ReviewComponents/ReviewComponent";

const MealByIdItemComponent = ({ meal }) => {
  return (
    <>
      <div className="about_meal">
        <h2>{meal.title}</h2>
        <p className="meal_by_id_desc">{meal.description}</p>
        <p className="meal_by_id_price">{meal.price} dkk</p>
      </div>
      <MealReservationComponent meal={meal} />
      <ReviewComponent meal={meal} />
    </>
  );
};

export default MealByIdItemComponent;
