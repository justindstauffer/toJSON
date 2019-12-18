const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const femaleNames = require("./routes/api/femaleNames");
const malesNames = require("./routes/api/maleNames");
const raceResults = require("./routes/api/raceResults");

app.use("/api/femaleNames", femaleNames);
app.use("/api/maleNames", malesNames);
app.use("/api/raceResults", raceResults);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));