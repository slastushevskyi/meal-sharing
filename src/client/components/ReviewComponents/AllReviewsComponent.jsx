import React, { useState, useEffect } from "react";
import AllReviewsListItem from "./AllReviewsListItem";

const AllReviewsComponent = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5050/api/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="all_reivews_main">
      <div className="all_reviews_div">
        <h2>All Reviews</h2>
        {reviews.map((review) => (
          <div className="all_meal_reviews_div" key={review.id}>
            <AllReviewsListItem review={review} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default AllReviewsComponent;
