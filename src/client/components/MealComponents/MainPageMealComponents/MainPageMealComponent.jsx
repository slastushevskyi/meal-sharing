import React, { useEffect, useState } from "react";
import MainPageMealListItem from "./MainPageMealListItem";

const MainPageMealComponent = () => {
  const [meals, setMeals] = useState([]);
  // For main page I wrote a query which responds only with two meals (app.js line 44)
  useEffect(() => {
    fetch("http://localhost:5050/")
      .then((response) => response.json())
      .then((data) => setMeals(data))
      .catch((error) => console.log(error));
  }, []);

  if (!meals) {
    return <p>Loading...</p>;
  }

  return (
    <main className="main_main">
      <div className="main_meals_div">
        <div className="about_meals">
          <p>
            Meals are an essential part of our daily lives, providing us with
            the necessary sustenance and energy to carry out our daily
            activities. A well-balanced meal contains a variety of nutrients,
            including carbohydrates, proteins, fats, vitamins, and minerals. It
            can come in different forms and types, including breakfast, lunch,
            dinner, snacks, and desserts. Whether you're a foodie or simply
            looking for something to satisfy your hunger, there are countless
            meal options available to suit your taste buds and dietary
            requirements. So, whether you prefer home-cooked meals or eating
            out, make sure to include a balanced and nutritious diet in your
            daily routine
          </p>
          <span className="main_meals_btn_border">
            <a className="main_meals_btn" href="http://localhost:3000/meals">
              Show available meals
            </a>
          </span>
        </div>
        {meals.map((meal) => (
          <div className="main_meals_item" key={meal.id}>
            <MainPageMealListItem meal={meal} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainPageMealComponent;
