import React from "react";
import PropTypes from "prop-types";

const ReviewByMealIdNotFoundComponent = ({ review }) => {
  return <p className="review_by_id_descr">{review.data}</p>;
};

ReviewByMealIdNotFoundComponent.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewByMealIdNotFoundComponent;
