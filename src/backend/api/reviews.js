const express = require("express");
const router = express.Router();
const knex = require("../database");

//GET Returns all reviews
router.get("/", async (req, res) => {
  try {
    const data = await knex("Review").select();
    res.status(200).json(await data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//POST Adds a new review to the database
router.post("/", async (req, res) => {
  try {
    const newReview = req.body;
    const [id] = await knex("Review").insert(newReview);
    if (id) {
      res.status(201).json({
        message: "New review added successfully",
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Error while adding new review" });
    console.error(error);
  }
});

// GET Returns a review by id.
router.get("/:id", async (req, res) => {
  try {
    const requestedId = parseInt(req.params.id);
    const review = await knex("Review").select().where("id", requestedId);
    if (review.length === 0) {
      res.status(404).json({ error: "Review Not Found" });
    } else {
      res.status(200).json(await review);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT	Updates the review by id
router.put("/:id", async (req, res) => {
  try {
    const requestedId = parseInt(req.params.id);
    const updatedReview = req.body;
    const updatedId = await knex("Review")
      .where("id", requestedId)
      .update(updatedReview);

    if (updatedId) {
      res.status(202).json({
        message: "Review updated successfully",
      });
    } else {
      res.status(404).json({
        message: "Review not found",
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE	Deletes the review by id
router.delete("/:id", async (req, res) => {
  const requestedId = parseInt(req.params.id);
  const deletedReview = await knex("Review").where("id", requestedId).del();
  if (deletedReview) {
    res.status(202).json({
      message: "Review deleted successfully",
    });
  } else {
    res.status(404).json({
      message: "Review not found",
    });
  }
});

module.exports = router;
