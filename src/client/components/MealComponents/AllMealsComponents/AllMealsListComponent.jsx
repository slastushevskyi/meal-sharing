import React, { useEffect, useState } from "react";
import AllMealListItem from "./AllMealListItem";
import AllMealsSearchComponent from "./AllMealsSearchComponent";
import AllMealsSortComponent from "./AllMealsSortComponent";

const AllMealsListComponent = () => {
  const [meals, setMeals] = useState([]);
  const [title, setTitle] = useState("");
  const [fetchUrl, setFetchUrl] = useState("http://localhost:5050/all-meals");

  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => setMeals(data))
      .catch((error) => console.log(error));
  }, [fetchUrl]);

  const searchFunction = (e) => {
    setFetchUrl(`http://localhost:5050/api/meals?title=${e.target.value}`);
    setTitle(e.target.value);
  };

  const SortByDateAsc = () => {
    setFetchUrl(`http://localhost:5050/api/meals?sortKey=when`);
  };
  const SortByDateDesc = () => {
    setFetchUrl(`http://localhost:5050/api/meals?sortKey=when&sortDir=desc`);
  };
  const SortByPriceAsc = () => {
    setFetchUrl(`http://localhost:5050/api/meals?sortKey=price`);
  };
  const SortByPriceDesc = () => {
    setFetchUrl(`http://localhost:5050/api/meals?sortKey=price&sortDir=desc`);
  };
  const SortByReservationsAsc = () => {
    setFetchUrl(`http://localhost:5050/api/meals?sortKey=max_reservations`);
  };
  const SortByReservationsDesc = () => {
    setFetchUrl(
      `http://localhost:5050/api/meals?sortKey=max_reservations&sortDir=desc`
    );
  };

  if (!meals) {
    <p>Loading...</p>;
  }
  return (
    <main className="all_meals_main">
      <div className="all_meals_div">
        <div className="sortDiv">
          <AllMealsSearchComponent
            title={title}
            searchFunction={searchFunction}
          />
          <AllMealsSortComponent
            SortByDateAsc={SortByDateAsc}
            SortByDateDesc={SortByDateDesc}
            SortByPriceAsc={SortByPriceAsc}
            SortByPriceDesc={SortByPriceDesc}
            SortByReservationsAsc={SortByReservationsAsc}
            SortByReservationsDesc={SortByReservationsDesc}
          />
        </div>
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
