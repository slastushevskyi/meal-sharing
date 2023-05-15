import React from "react";
import PropTypes from "prop-types";

const MealNotFoundComponent = ({ meal }) => {
  return (
    <>
      <h2>{meal.data}</h2>
    </>
  );
};

MealNotFoundComponent.propTypes = {
  meal: PropTypes.object.isRequired,
};

export default MealNotFoundComponent;
