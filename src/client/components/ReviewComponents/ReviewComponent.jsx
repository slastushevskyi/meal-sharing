import React, { useState } from "react";
import ReviewFormComponent from "./ReviewFormComponent";
import PropTypes from "prop-types";

const ReviewComponent = ({ meal }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="reviewDiv">
      <p>Already tried this meal? Please, share your impretions</p>
      {clicked ? (
        <>
          <input
            className="show_form_btn"
            type="button"
            value="Hide"
            onClick={handleClick}
          />
          <ReviewFormComponent meal={meal} />
        </>
      ) : (
        <input
          className="show_form_btn"
          type="button"
          value="Write review"
          onClick={handleClick}
        />
      )}
    </div>
  );
};

ReviewComponent.propTypes = {
  meal: PropTypes.object.isRequired,
};

export default ReviewComponent;
