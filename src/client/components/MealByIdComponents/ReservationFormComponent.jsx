import React from "react";
import PropTypes from "prop-types";

const ReservationFormComponent = ({
  availableMeal,
  handleSubmit,
  name,
  email,
  phone,
  amount,
  setName,
  setEmail,
  setPhone,
  setAmount,
}) => {
  return (
    <div className="reservationForm_div">
      <h3>Want to order? Reservation form is below:</h3>
      <form className="reservationForm" onSubmit={handleSubmit}>
        <label className="reserv_label" htmlFor="name">
          Full name:
        </label>
        <input
          className="reserv_input"
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label className="reserv_label" htmlFor="email">
          E-mail:
        </label>
        <input
          className="reserv_input"
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="reserv_label" htmlFor="phone">
          Phone number:
        </label>
        <input
          className="reserv_input"
          type="text"
          value={phone}
          required
          onChange={(e) => setPhone(e.target.value)}
        />
        <label className="reserv_label" htmlFor="amount">
          Amount of meal:
        </label>
        {availableMeal.map((meal) => (
          <input
            className="reserv_input"
            key={meal.id}
            type="number"
            value={amount}
            max={meal.remaining_reservation}
            required
            onChange={(e) => setAmount(e.target.value)}
          />
        ))}
        <input
          className="submit_btn"
          type="submit"
          value="Create reservation"
        />
      </form>
    </div>
  );
};

ReservationFormComponent.propTypes = {
  availableMeal: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setName: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPhone: PropTypes.func.isRequired,
  setAmount: PropTypes.func.isRequired,
};

export default ReservationFormComponent;
