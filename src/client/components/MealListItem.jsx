import React from "react";

const MealListItem = ({ item }) => {
  return (
    <>
      <p>
        {item.title} ({item.description}) - {item.price}
      </p>
    </>
  );
};

export default MealListItem;
