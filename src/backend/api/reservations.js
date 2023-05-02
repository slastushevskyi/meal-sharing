const express = require("express");
const router = express.Router();
const knex = require("../database");

// GET Returns all reservations
router.get("/", async (req, res) => {
  try {
    const data = await knex("Reservation").select();
    res.status(200).json(await data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST Adds a new reservation to the database
router.post("/", async (req, res) => {
  try {
    const newReservation = req.body;
    const id = await knex("Reservation").insert(newReservation);
    if (id) {
      res.status(201).json({
        message: "New reservation added successfully",
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Error while adding new reservation" });
    console.error(error);
  }
});

// GET Returns a reservation by id
router.get("/:id", async (req, res) => {
  try {
    const requestedId = parseInt(req.params.id);
    const reservation = await knex("Reservation")
      .select()
      .where("id", requestedId);
    if (!reservation.length) {
      res.status(404).end(`Reservation Id: ${requestedId} Not Found`);
    }
    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT	Updates the reservation by id
router.put("/:id", async (req, res) => {
  try {
    const requestedId = parseInt(req.params.id);
    const updatedReservation = req.body;
    const updatedId = await knex("Reservation")
      .where("id", requestedId)
      .update(updatedReservation);

    if (updatedId) {
      res.status(202).json({
        message: "Reservation updated successfully",
      });
    } else {
      res.status(404).json({
        message: "Reservation not found",
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE	Deletes the reservation by id
router.delete("/:id", async (req, res) => {
  const requestedId = parseInt(req.params.id);
  const deletedReservation = await knex("Reservation")
    .where("id", requestedId)
    .del();
  if (deletedReservation) {
    res.status(202).json({
      message: "Reservation deleted successfully",
    });
  } else {
    res.status(404).json({
      message: "Reservation not found",
    });
  }
});

module.exports = router;
