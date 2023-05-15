import React from "react";

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

export default ReservationFormComponent;
