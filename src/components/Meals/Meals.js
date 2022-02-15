import React from "react";
import MealsSummary from "./MealsSummary";
import AvalaibleMeals from "./AvalaibleMeals";

const Meals = (props) => {
  return (
    <>
      <MealsSummary />
      <AvalaibleMeals />
    </>
  );
};

export default Meals;
