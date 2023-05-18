import React from "react";
import PropTypes from "prop-types";

const AllMealsSearchComponent = ({ title, searchFunction }) => {
  return (
    <div className="searchInput_wrapper">
      <h3>Search by name:</h3>
      <input
        className="searchInput"
        type="text"
        value={title}
        onChange={(e) => searchFunction(e)}
      />
    </div>
  );
};

AllMealsSearchComponent.propTypes = {
  title: PropTypes.string.isRequired,
  searchFunction: PropTypes.func.isRequired,
};

export default AllMealsSearchComponent;
