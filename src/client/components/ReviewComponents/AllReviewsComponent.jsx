import React, { useState, useEffect } from "react";
import AllReviewsListItem from "./AllReviewsListItem";

const AllReviewsComponent = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5050/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main>
      <div className="all_reviews_div">
        {meals.map((review) => (
          <div className="all_meals_meal_div" key={review.id}>
            <AllReviewsListItem review={review} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default AllReviewsComponent;
