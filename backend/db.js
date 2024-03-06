const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL);

const todoSchemea = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("Todos", todoSchemea);

module.exports = {
  todo,
};
