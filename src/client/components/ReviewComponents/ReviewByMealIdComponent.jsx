import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewByMealIdNotFoundComponent from "./ReviewByMealIdNotFoundComponent";
import ReviewByMealIdItemComponent from "./ReviewByMealIdItemComponent";

const ReviewByMealIdComponent = () => {
  const [reviews, setReviews] = useState([]);
  const [mealTitle, setMealTitle] = useState(undefined);
  const { id } = useParams();
  console.log(mealTitle);

  useEffect(() => {
    fetch(`http://localhost:5050/api/meals/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const meal = data[0];
        setMealTitle(meal.title);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5050/api/meals/${id}/reviews`)
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="reviews_by_id_main">
      {mealTitle === undefined ? null : <h2>Reviews for "{mealTitle}"</h2>}
      {reviews.map((review) =>
        review.data ? (
          <div className="review_by_id_div" key={review.id}>
            <ReviewByMealIdNotFoundComponent review={review} />
          </div>
        ) : (
          <div className="review_by_id_div" key={review.id}>
            <ReviewByMealIdItemComponent review={review} />
          </div>
        )
      )}
    </main>
  );
};

export default ReviewByMealIdComponent;
