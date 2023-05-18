import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReactStars from "react-rating-stars-component";

const AllReviewsListItem = ({ review }) => {
  const [mealTitle, setMealTitle] = useState(undefined);

  console.log(mealTitle);
  useEffect(() => {
    fetch(`http://localhost:5050/api/meals/${review.meal_id}`)
      .then((response) => response.json())
      .then((data) => {
        const meal = data[0];
        setMealTitle(meal.title);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h3>Review for {mealTitle}</h3>
      <h4 className="review_title">{review.title}</h4>
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

AllReviewsListItem.propTypes = {
  review: PropTypes.object.isRequired,
};

export default AllReviewsListItem;
