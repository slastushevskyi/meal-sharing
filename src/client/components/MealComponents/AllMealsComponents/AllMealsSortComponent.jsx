import React from "react";
import PropTypes from "prop-types";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const AllMealsSortComponent = ({
  SortByDateAsc,
  SortByDateDesc,
  SortByPriceAsc,
  SortByPriceDesc,
  SortByReservationsAsc,
  SortByReservationsDesc,
}) => {
  return (
    <>
      <div className="sort_wrapper">
        <input
          id="sort_by_date_asc"
          type="radio"
          className="sortBtn"
          onChange={SortByDateAsc}
          name="sort_group"
        />
        <label htmlFor="sort_by_date_asc">
          <FaArrowUp className="fafa_icon" />
        </label>
        <p className="sortBy_p">Date</p>
        <input
          id="sort_by_date_desc"
          type="radio"
          className="sortBtn"
          onChange={SortByDateDesc}
          name="sort_group"
        />
        <label htmlFor="sort_by_date_desc">
          <FaArrowDown className="fafa_icon" />
        </label>
      </div>
      <div className="sort_wrapper">
        <input
          id="sort_by_reservations_asc"
          type="radio"
          className="sortBtn"
          onChange={SortByReservationsAsc}
          name="sort_group"
        />
        <label htmlFor="sort_by_reservations_asc">
          <FaArrowUp className="fafa_icon" />
        </label>
        <p className="sortBy_p">Max Reservations</p>
        <input
          id="sort_by_reservations_desc"
          type="radio"
          className="sortBtn"
          onChange={SortByReservationsDesc}
          name="sort_group"
        />
        <label htmlFor="sort_by_reservations_desc">
          <FaArrowDown className="fafa_icon" />
        </label>
      </div>
      <div className="sort_wrapper">
        <input
          id="sort_by_price_asc"
          type="radio"
          className="sortBtn"
          onChange={SortByPriceAsc}
          name="sort_group"
        />
        <label htmlFor="sort_by_price_asc">
          <FaArrowUp className="fafa_icon" />
        </label>
        <p className="sortBy_p">Price</p>
        <input
          id="sort_by_price_desc"
          type="radio"
          className="sortBtn"
          onChange={SortByPriceDesc}
          name="sort_group"
        />
        <label htmlFor="sort_by_price_desc">
          <FaArrowDown className="fafa_icon" />
        </label>
      </div>
    </>
  );
};

AllMealsSortComponent.propTypes = {
  SortByDateAsc: PropTypes.func.isRequired,
  SortByDateDesc: PropTypes.func.isRequired,
  SortByPriceAsc: PropTypes.func.isRequired,
  SortByPriceDesc: PropTypes.func.isRequired,
  SortByReservationsAsc: PropTypes.func.isRequired,
  SortByReservationsDesc: PropTypes.func.isRequired,
};

export default AllMealsSortComponent;
