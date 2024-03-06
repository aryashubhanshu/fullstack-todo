const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:987654321987@cluster0.wxapiuk.mongodb.net/fullstack_todo"
);

const todoSchemea = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("Todos", todoSchemea);

module.exports = {
  todo,
};
