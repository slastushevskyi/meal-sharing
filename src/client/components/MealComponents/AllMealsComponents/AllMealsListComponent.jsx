import React, { useEffect, useState } from "react";
import AllMealListItem from "./AllMealListItem";

const AllMealsListComponent = () => {
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

  return (
    <main className="all_meals_main">
      <div className="all_meals_div">
        {meals.map((meal) => (
          <div className="all_meals_meal_div" key={meal.id}>
            <AllMealListItem key={meal.id} meal={meal} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default AllMealsListComponent;
