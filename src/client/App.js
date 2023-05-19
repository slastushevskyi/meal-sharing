import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import AllMealsListComponent from "./components/MealComponents/AllMealsComponents/AllMealsListComponent";
import HeaderComponent from "./components/MainComponents/HeaderComponent";
import FooterComponent from "./components/MainComponents/FooterComponent";
import MainPageMealComponent from "./components/MealComponents/MainPageMealComponents/MainPageMealComponent";
import MealByIdComponent from "./components/MealComponents/MealByIdComponents/MealByIdComponent";
import AllReviewsComponent from "./components/ReviewComponents/AllReviewsComponent";
import ReviewByMealIdComponent from "./components/ReviewComponents/ReviewByMealIdComponent";
import AboutComponent from "./components/AboutComponent/AboutComponent";

function App() {
  return (
    <Router>
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
      <Route exact path="/meals/:id/reviews">
        <HeaderComponent />
        <ReviewByMealIdComponent />
        <FooterComponent />
      </Route>
      <Route exact path="/reviews">
        <HeaderComponent />
        <AllReviewsComponent />
        <FooterComponent />
      </Route>
      <Route exact path="/about">
        <HeaderComponent />
        <AboutComponent />
        <FooterComponent />
      </Route>
      <Route exact path="/test-component">
        <TestComponent></TestComponent>
      </Route>
    </Router>
  );
}

export default App;
