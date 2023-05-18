import React from "react";
import PropTypes from "prop-types";
import ReactStars from "react-rating-stars-component";

const ReviewByMealIdItemComponent = ({ review }) => {
  return (
    <>
      <h3>{review.title}</h3>
      <p className="review_by_id_descr">{review.description}</p>
      <div className="rate_wrapper">
        <ReactStars
          count={5}
          value={review.stars}
          size={24}
          activeColor="#ffd700"
          edit={false}
        />
      </div>
    </>
  );
};

ReviewByMealIdItemComponent.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewByMealIdItemComponent;
