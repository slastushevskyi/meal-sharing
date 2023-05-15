import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";

const ReviewFormComponent = ({ meal }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [stars, setStars] = useState(0);
  const id = meal.id;
  const currentDate = new Date();
  const createdDate = currentDate.toISOString().slice(0, 19).replace("T", " ");

  useEffect(() => {
    console.log(stars);
  }),
    [stars];
  const ratingChanged = (rate) => {
    setStars(rate);
  };

  const clearInput = () => {
    setTitle("");
    setDescription("");
    setStars(0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reviewData = {
      title: title,
      stars: stars,
      description: description,
      created_date: createdDate,
      meal_id: id,
    };
    try {
      const response = await fetch("http://localhost:5050/api/reviews", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reviewData),
      });
      const data = await response.json();
      response.ok ? (alert(data.message), clearInput()) : alert(data.error);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="reviewForm_div">
      <h3>{meal.title} review</h3>
      <form className="reviewForm" onSubmit={handleSubmit}>
        <label className="review_label" htmlFor="title">
          Title:
        </label>
        <input
          className="review_input"
          type="text"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="review_label" htmlFor="description">
          Description:
        </label>
        <textarea
          className="review_descr"
          type="text"
          value={description}
          required
          cols="40"
          rows="6"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <div className="rateDiv">
          <h3>Rate:</h3>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            value={stars}
            size={24}
            activeColor="#ffd700"
          />
        </div>
        <input className="submit_btn" type="submit" value="Send review" />
      </form>
    </div>
  );
};

export default ReviewFormComponent;
