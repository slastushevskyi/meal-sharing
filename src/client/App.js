import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import MealListComponent from "./components/MealListComponent";

function App() {
  return (
    <Router>
      <Route exact path="/all-meals">
        <h1>Meal-sharing app</h1>
        <MealListComponent />
      </Route>
      <Route exact path="/">
        <p>testa</p>
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
