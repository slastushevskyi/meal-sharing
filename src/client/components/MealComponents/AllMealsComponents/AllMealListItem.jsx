import React from "react";

const AllMealListItem = ({ meal }) => {
  return (
    <>
      <h2>{meal.title}</h2>
      <p className="all_meals_meal_price">{meal.price} dkk</p>
      <a
        className="all_meals_meal_ref_btn"
        href={`http://localhost:3000/meals/${meal.id}`}
      >
        Click for more
      </a>
    </>
  );
};

export default AllMealListItem;
