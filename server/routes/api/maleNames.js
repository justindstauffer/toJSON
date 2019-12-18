const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const router = express.Router();

// Start connection to database

let db = new sqlite3.Database("names.db", err => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected to the names database.");
  }
});

// GET request

router.get("/", async (req, res) => {
  // Get all devices from database
  db.all(`SELECT * FROM maleNames`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    res.send(row);
  });
});

// POST request

router.post("/", (req, res) => {
  //
  //const data = await postDevice();
  db.run(
    "INSERT INTO maleNames VALUES ($id, $name)",
    {
      $id: req.body.id,
      $name: req.body.name
    },
    err => {
      if (err) {
        res.send({ message: "Error posting" });
      } else {
        res.status(201).send({ message: "Successfully posted new male name" });
      }
    }
  );
});




module.exports = router;
