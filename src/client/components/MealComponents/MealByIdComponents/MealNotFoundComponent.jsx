import React from "react";
import PropTypes from "prop-types";

const MealNotFoundComponent = ({ meal }) => {
  return (
    <>
      <h2 className="about_meal_p">{meal.data}</h2>
    </>
  );
};

MealNotFoundComponent.propTypes = {
  meal: PropTypes.object.isRequired,
};

export default MealNotFoundComponent;
