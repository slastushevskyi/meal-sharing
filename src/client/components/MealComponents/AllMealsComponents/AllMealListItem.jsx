import React from "react";
import PropTypes from "prop-types";

const AllMealListItem = ({ meal }) => {
  const createdDate = meal.when.slice(0, 19).replace("T", " ");
  return (
    <>
      <h2>{meal.title}</h2>
      <p className="all_meals_meal_created">Added: {createdDate}</p>
      <p className="all_meals_meal_price">{meal.price} dkk</p>
      <p className="all_meals_meal_maxreservation">
        Max reservations: {meal.maxreservation}
      </p>
      <div className="butn_wrapper">
        <a
          className="all_meals_meal_ref_btn"
          href={`http://localhost:3000/meals/${meal.id}`}
        >
          Click for more
        </a>
      </div>
      <div className="butn_wrapper">
        {" "}
        <a
          className="all_meals_meal_ref_btn"
          href={`http://localhost:3000/meals/${meal.id}/reviews`}
        >
          See the reviews
        </a>
      </div>
    </>
  );
};

AllMealListItem.propTypes = {
  meal: PropTypes.object.isRequired,
};

export default AllMealListItem;
