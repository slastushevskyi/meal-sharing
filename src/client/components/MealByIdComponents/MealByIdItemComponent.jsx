import React, { useState } from "react";
import MealReservationComponent from "./MealReservationComponent";
import ReviewComponent from "../ReviewComponents/ReviewComponent";
import PropTypes from "prop-types";

const MealByIdItemComponent = ({ meal }) => {
  const [fetchedAvailableMeals, setFetchedAvailableMeals] = useState([]);
  const fetchedMeal = fetchedAvailableMeals.filter(
    (item) => item.id === meal.id
  );

  return (
    <>
      <div className="about_meal">
        <h2>{meal.title}</h2>
        <p className="meal_by_id_desc">{meal.description}</p>
        <p className="meal_by_id_price">{meal.price} dkk</p>
        {fetchedMeal[0]
          ? fetchedMeal.map((meal) => (
              <p className="meal_by_id_available" key={meal.id}>
                Available: {meal.remaining_reservation}
              </p>
            ))
          : null}
      </div>
      <div className="butn_wrapper">
        <a
          className="all_meals_meal_ref_btn"
          href={`http://localhost:3000/meals/${meal.id}/reviews`}
        >
          Reviews
        </a>
      </div>
      <MealReservationComponent
        meal={meal}
        fetchedAvailableMeals={fetchedAvailableMeals}
        setFetchedAvailableMeals={setFetchedAvailableMeals}
      />
      <ReviewComponent meal={meal} />
    </>
  );
};

MealByIdItemComponent.propTypes = {
  meal: PropTypes.object.isRequired,
};

export default MealByIdItemComponent;
