const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect("mongodb://127.0.0.1:27017/Animal-Test")
    .then(() => console.log("Mongo DB database connection"))
    .catch(error => console.log(error.message));
};

module.exports = connectToDatabase;
