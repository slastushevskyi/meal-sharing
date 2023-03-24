const express = require("express");
const router = express.Router();
const knex = require("../database");

// GET	Returns all meals
router.get("/", async (req, res) => {
  try {
    const data = await knex("Meal").select();
    res.status(200).json(await data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST Adds a new meal to the database
router.post("/", async (req, res) => {
  try {
    const newMeal = req.body;
    const [id] = await knex("Meal").insert(newMeal);
    if ([id]) {
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
    const mealIds = await knex("Meal").select("id");
    const filteredMeal = mealIds.filter((meal) => {
      for (const key in meal) {
        const value = meal[key];
        if (value === requestedId) {
          return meal;
        }
      }
    });
    if (filteredMeal.length === 0) {
      res.status(404).end("Meal Id Not Found");
    } else {
      const [{ id }] = filteredMeal;
      const meal = await knex("Meal").select().where("id", id);
      res.status(200).json({ data: meal });
    }
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

module.exports = router;
