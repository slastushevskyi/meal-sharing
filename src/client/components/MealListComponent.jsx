import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";

const MealListComponent = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5050/all-meals")
      .then((response) => response.json())
      .then((data) => setMeals(data))
      .catch((error) => console.log(error));
  }, []);

  if (!meals) {
    return <p>Loading...</p>;
  }

  return meals.map((meal) => (
    <div className="meal_div" key={meal.id}>
      <MealItem meal={meal} />
    </div>
  ));
};

export default MealListComponent;
