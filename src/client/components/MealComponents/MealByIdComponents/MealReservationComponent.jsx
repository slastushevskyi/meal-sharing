import React, { useState, useEffect } from "react";
import ReservationFormComponent from "./ReservationFormComponent";
import PropTypes from "prop-types";

const MealReservationComponent = ({
  meal,
  fetchedAvailableMeals,
  setFetchedAvailableMeals,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [reviewSend, setReviewSend] = useState(false);
  // meal id from props
  const id = meal.id;
  // Checking if current meal in list of meals with available reservations
  const availableMeal = fetchedAvailableMeals.filter((meal) => meal.id === id);

  // Fetching new array of meals only with available reservations
  // And useEffect update immediately amount of available reservations when a reservation is sent
  useEffect(() => {
    fetch("http://localhost:5050/api/meals?availableReservations=true")
      .then((response) => response.json())
      .then((data) => setFetchedAvailableMeals(data))
      .catch((error) => console.log(error));
  }, [reviewSend]);

  const clearInput = () => {
    setName("");
    setEmail("");
    setPhone("");
    setAmount("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentDate = new Date();
    // Have to cut out milliseconds with slice and replace T to space
    // so it could fit to the sql format
    const createdDate = currentDate
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");
    const reservationData = {
      contact_name: name,
      contact_email: email,
      contact_phone_number: phone,
      number_of_guests: amount,
      created_date: createdDate,
      meal_id: id,
    };
    try {
      const response = await fetch("http://localhost:5050/api/reservations/", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reservationData),
      });
      const data = await response.json();
      // if response is ok it shows message, clear inputs and updating data
      // of available meals with useEffect hook
      response.ok
        ? (alert(data.message), clearInput(), setReviewSend(true))
        : alert(data.error);
    } catch (error) {
      console.log(error);
    }
  };

  return availableMeal[0] ? (
    <ReservationFormComponent
      availableMeal={availableMeal}
      handleSubmit={handleSubmit}
      setName={setName}
      setEmail={setEmail}
      setPhone={setPhone}
      setAmount={setAmount}
      name={name}
      email={email}
      phone={phone}
      amount={amount}
    />
  ) : (
    <p className="meal_not_found">
      Unfortunately there are no available meals to order. Please, choose
      something else!
    </p>
  );
};

MealReservationComponent.propTypes = {
  meal: PropTypes.object.isRequired,
  fetchedAvailableMeals: PropTypes.array.isRequired,
  setFetchedAvailableMeals: PropTypes.func.isRequired,
};

export default MealReservationComponent;
