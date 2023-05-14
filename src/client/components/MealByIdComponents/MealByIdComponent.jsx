import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MealByIdItemComponent from "./MealByIdItemComponent";
import MealNotFoundComponent from "./MealNotFoundComponent";

const MealByIdComponent = () => {
  const [meals, setMeals] = useState([]);
  // To get a meal id param from route (client side) http://localhost:5050/api/meals/:id
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5050/api/meals/${id}`)
      .then((response) => response.json())
      .then((data) => setMeals(data))
      .catch((error) => console.log(error));
  }, []);

  if (!meals) {
    <main className="meal_by_id">
      return <p>Loading...</p>;
    </main>;
  }
  return (
    <main className="meal_by_id">
      {meals.map((meal) =>
        meal.data ? (
          <div className="meal_by_id_div" key={meal.id}>
            <MealNotFoundComponent meal={meal} />
          </div>
        ) : (
          <div className="meal_by_id_div" key={meal.id}>
            <MealByIdItemComponent meal={meal} />
          </div>
        )
      )}
    </main>
  );
};

export default MealByIdComponent;
