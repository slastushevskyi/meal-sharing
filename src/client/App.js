import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import AllMealsListComponent from "./components/MealComponents/AllMealsComponents/AllMealsListComponent";
import HeaderComponent from "./components/MainComponents/HeaderComponent";
import FooterComponent from "./components/MainComponents/FooterComponent";
import MainPageMealComponent from "./components/MealComponents/MainPageMealComponents/MainPageMealComponent";
import MealByIdComponent from "./components/MealByIdComponents/MealByIdComponent";
import AllReviewsComponent from "./components/ReviewComponents/AllReviewsComponent";

function App() {
  return (
    <Router>
      <Route exact path="/all-meals">
        <MealListComponent />
      </Route>
      <Route exact path="/">
        <HeaderComponent />
        <MainPageMealComponent />
        <FooterComponent />
      </Route>
      <Route exact path="/meals">
        <HeaderComponent />
        <AllMealsListComponent />
        <FooterComponent />
      </Route>
      <Route exact path="/meals/:id">
        <HeaderComponent />
        <MealByIdComponent />
        <FooterComponent />
      </Route>
      <Route exact path="/reviews">
        <HeaderComponent />
        <AllReviewsComponent />
        <FooterComponent />
      </Route>
      <Route exact path="/lol">
        <p>lol</p>
      </Route>
      <Route exact path="/test-component">
        <TestComponent></TestComponent>
      </Route>
    </Router>
  );
}

export default App;
