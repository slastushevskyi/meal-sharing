const express = require("express");
const router = express.Router();
const knex = require("../database");

// POST Adds a new meal to the database
router.post("/", async (req, res) => {
  try {
    const newMeal = req.body;
    const id = await knex("Meal").insert(newMeal);
    if (id) {
      res.status(201).json({
        message: "New Meal added successfully",
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Error while adding new Meal" });
    console.error(error);
  }
});

// GET	Returns the meal by id
router.get("/:id", async (req, res) => {
  try {
    const requestedId = parseInt(req.params.id);
    const meal = await knex("Meal").select().where("id", requestedId);
    if (!meal.length) {
      res.status(404).end(`Meal Id: ${requestedId} Not Found`);
    }
    res.status(200).json(meal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT	Updates the meal by id
router.put("/:id", async (req, res) => {
  try {
    const requestedId = parseInt(req.params.id);
    const updatedMeal = req.body;
    const updatedId = await knex("Meal")
      .where("id", requestedId)
      .update(updatedMeal);

    if (updatedId) {
      res.status(202).json({
        message: "Meal updated successfully",
      });
    } else {
      res.status(404).json({
        message: "Meal not found",
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE	Deletes the reservation by id
router.delete("/:id", async (req, res) => {
  const requestedId = parseInt(req.params.id);
  const deletedMeal = await knex("Meal").where("id", requestedId).del();
  if (deletedMeal) {
    res.status(202).json({
      message: "Meal deleted successfully",
    });
  } else {
    res.status(404).json({
      message: "Meal not found",
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await knex("Meal").select();
    res.status(200).json(data);
    if (!Object.keys(req.query).length) {
      const data = await knex("Meal").select();
      res.status(200).json(data);
    } else {
      const parameter = req.query;
      for (const [key, value] of Object.entries(parameter)) {
        if (key === "maxPrice") {
          const price = parseInt(value);
          const selectedMeals = await knex
            .select()
            .from("Meal")
            .where("price", "<=", price);
          res.json(selectedMeals);
        } else if (key === "availableReservations") {
          if (value === "true") {
            const mealsWithRemainingReservations = knex
              .select(
                "Meal.*",
                // I tried to avoid to use knex raw, but in this query it's unreal
                knex.raw(
                  // Coalesce is amazing sql fucntion that returs first NOT NULL value
                  // In this case I have one meal that never been bought before and after join
                  // tables it has NULL value. Coalesce gives me opportunity to use the value that
                  // was before JOIN (maxreservation).
                  "coalesce(Meal.maxreservation - sum(Reservation.number_of_guests), Meal.maxreservation) as remaining_reservation"
                )
              )
              .from("Meal")
              .leftJoin("Reservation", "Reservation.meal_id", "Meal.id")
              .groupBy("Meal.id")
              .having(
                knex.raw(
                  "remaining_reservation > 0 OR remaining_reservation IS NULL"
                )
              );
            res.status(200).json(await mealsWithRemainingReservations);
          } else {
            const mealsWithRemainingReservations = knex
              .select(
                "Meal.*",
                knex.raw(
                  "Meal.maxreservation - sum(Reservation.number_of_guests) as remaining_reservation"
                )
              )
              .from("Meal")
              .leftJoin("Reservation", "Reservation.meal_id", "Meal.id")
              .groupBy("Meal.id")
              .having("remaining_reservation", "<", 0);
            res.json(await mealsWithRemainingReservations);
          }
        } else if (key === "title") {
          const meals = await knex
            .select()
            .from("Meal")
            .where("title", "like", `%${value}%`);
          res.status(200).json(await meals);
        } else if (key === "dateAfter") {
          const meals = await knex
            .select()
            .from("Meal")
            .where("when", ">", `${value}`);
          res.status(200).json(await meals);
        } else if (key === "dateBefore") {
          const meals = await knex
            .select()
            .from("Meal")
            .where("when", "<", `${value}`);
          res.status(200).json(await meals);
        } else if (key === "limit") {
          const meals = await knex.select().from("Meal").limit(`${value}`);
          res.status(200).json(await meals);
        } else if (
          req.query.sortKey === "when" ||
          req.query.sortKey === "max_reservations" ||
          req.query.sortKey === "price"
        ) {
          if (req.query.sortDir) {
            const meals = await knex
              .select()
              .from("Meal")
              .orderBy(`${req.query.sortKey}`, `${req.query.sortDir}`);
            return res.status(200).json(await meals);
          } else {
            const meals = await knex.select().from("Meal").orderBy(`${value}`);
            res.status(200).json(await meals);
          }
        } else {
          res.status(404).json({ message: "Wrong query" });
        }
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
