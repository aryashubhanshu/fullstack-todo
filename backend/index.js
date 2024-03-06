const express = require("express");
const cors = require("cors");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  // Put it in mongodb
  await todo.create({
    title: parsedPayload.data.title,
    description: parsedPayload.data.description,
    completed: false,
  });
  res.json({
    msg: "Todo created successfully",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.json(todos);
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  // Update it in mongodb
  await todo.findByIdAndUpdate(parsedPayload.data.id, {
    completed: true,
  });
  res.json({
    msg: "Todo marked as done",
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000);
