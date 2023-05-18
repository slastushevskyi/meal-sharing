import React from "react";
import PropTypes from "prop-types";

const ReviewByMealIdNotFoundComponent = ({ review }) => {
  return <p>{review.data}</p>;
};

ReviewByMealIdNotFoundComponent.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewByMealIdNotFoundComponent;
