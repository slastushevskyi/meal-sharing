import React from "react";
import PropTypes from "prop-types";

const MealListItem = ({ meal }) => {
  return (
    <>
      <h2>{meal.title}</h2>
      <p className="meal_desc">{meal.description}</p>
      <p className="meal_price">{meal.price}</p>
    </>
  );
};

MealListItem.propTypes = {
  meal: PropTypes.object.isRequired,
};
export default MealListItem;
