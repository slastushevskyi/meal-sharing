import React from "react";

const MainPageMealListItem = ({ meal }) => {
  return (
    <>
      <h2>{meal.title}</h2>
      <p className="main_meal_desc">{meal.description}</p>
      <p className="main_meal_price">{meal.price} dkk</p>
      <a
        className="main_meal_ref_btn"
        href={`http://localhost:3000/meals/${meal.id}`}
      >
        Click for more
      </a>
    </>
  );
};

export default MainPageMealListItem;
