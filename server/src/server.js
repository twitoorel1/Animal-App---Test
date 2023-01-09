require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");
const connectToDatabase = require("./database/database.connect");
const app = express();

// Connect To Database
connectToDatabase();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use(routes);

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`http://localhost:${port}`));
