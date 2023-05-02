// require("dotenv").config();
const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

const mealsRouter = require("./api/meals");
const reservationsRouter = require("./api/reservations");
const buildPath = path.join(__dirname, "../../dist");
const port = process.env.PORT || 3000;
const cors = require("cors");

const knex = require("./database");

// For week4 no need to look into this!
// Serve the built client html
app.use(express.static(buildPath));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(cors());

router.use("/meals", mealsRouter);
router.use("/reservations", reservationsRouter);

// Respond with all meals in the future (relative to the when datetime)
app.get("/future-meals", (req, res) => {
  knex
    .raw("SELECT * FROM Meal WHERE 'when'>'GETDATE()'")
    .then((rows) => {
      res.end(JSON.stringify(rows[0]));
    })
    .catch((error) => {
      console.error(error);
      res.status(500).end("Internal Server Error");
    });
});

// Respond with all meals in the past (relative to the when datetime)
app.get("/past-meals", (req, res) => {
  knex
    .raw("SELECT * FROM Meal WHERE 'when'<'GETDATE()'")
    .then((rows) => {
      res.end(JSON.stringify(rows[0]));
    })
    .catch((error) => {
      console.error(error);
      res.status(500).end("Internal Server Error");
    });
});

//Respond with all meals sorted by ID
app.get("/all-meals", (req, res) => {
  knex
    .raw("SELECT * FROM Meal ORDER BY id")
    .then((rows) => {
      res.end(JSON.stringify(rows[0]));
    })
    .catch((error) => {
      console.error(error);
      res.status(500).end("Internal Server Error");
    });
});

// Respond with the first meal (meaning with the minimum id)
app.get("/first-meal", (req, res) => {
  knex
    .raw("SELECT * FROM Meal WHERE id = (SELECT MIN(id) FROM Meal)")
    .then((rows) => {
      if (rows[0].length === 0) {
        res.status(404).end("Meals not found");
      } else if (rows[0].length > 0) {
        res.end(JSON.stringify(rows[0][0]));
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).end("Internal Server Error");
    });
});

// Respond with the last meal (meaning with the maximum id)
app.get("/last-meal", (req, res) => {
  knex
    .raw("SELECT * FROM Meal WHERE id = (SELECT MAX(id) FROM Meal)")
    .then((rows) => {
      if (rows[0].length === 0) {
        res.status(404).end("Meals not found");
      } else if (rows[0].length > 0) {
        res.end(JSON.stringify(rows[0][0]));
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).end("Internal Server Error");
    });
});

// Respond with all meals in the future (relative to the when datetime)
app.get("/future-meals", (req, res) => {
  knex
    .raw("SELECT * FROM Meal WHERE 'when'>'GETDATE()'")
    .then((rows) => {
      res.end(JSON.stringify(rows[0]));
    })
    .catch((error) => {
      console.error(error);
      res.status(500).end("Internal Server Error");
    });
});

// Respond with all meals in the past (relative to the when datetime)
app.get("/past-meals", (req, res) => {
  knex
    .raw("SELECT * FROM Meal WHERE 'when'<'GETDATE()'")
    .then((rows) => {
      res.end(JSON.stringify(rows[0]));
    })
    .catch((error) => {
      console.error(error);
      res.status(500).end("Internal Server Error");
    });
});

//Respond with all meals sorted by ID
app.get("/all-meals", (req, res) => {
  knex
    .raw("SELECT * FROM Meal ORDER BY id")
    .then((rows) => {
      res.end(JSON.stringify(rows[0]));
    })
    .catch((error) => {
      console.error(error);
      res.status(500).end("Internal Server Error");
    });
});

// Respond with the first meal (meaning with the minimum id)
app.get("/first-meal", (req, res) => {
  knex
    .raw("SELECT * FROM Meal WHERE id = (SELECT MIN(id) FROM Meal)")
    .then((rows) => {
      if (rows[0].length === 0) {
        res.status(404).end("Meals not found");
      } else if (rows[0].length > 0) {
        res.end(JSON.stringify(rows[0][0]));
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).end("Internal Server Error");
    });
});

// Respond with the last meal (meaning with the maximum id)
app.get("/last-meal", (req, res) => {
  knex
    .raw("SELECT * FROM Meal WHERE id = (SELECT MAX(id) FROM Meal)")
    .then((rows) => {
      if (rows[0].length === 0) {
        res.status(404).end("Meals not found");
      } else if (rows[0].length > 0) {
        res.end(JSON.stringify(rows[0][0]));
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).end("Internal Server Error");
    });
});

if (process.env.API_PATH) {
  app.use(process.env.API_PATH, router);
} else {
  throw "API_PATH is not set. Remember to set it in your .env file";
}

// for the frontend. Will first be covered in the react class
app.use("*", (req, res) => {
  res.sendFile(path.join(`${buildPath}/index.html`));
});

module.exports = app;
