import React, { useEffect, useState } from "react";
import MealListItem from "./MealListItem";

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

  return meals.map((item) => (
    <div key={item.id}>
      <MealListItem item={item} />
    </div>
  ));
};

export default MealListComponent;
