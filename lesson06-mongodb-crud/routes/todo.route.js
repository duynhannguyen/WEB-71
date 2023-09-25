import express from "express";

import { db } from "../config/database.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
  const todos = await db.todos.find().toArray();
  return res.json(todos);
});
router.get("/:id", async (req, res) => {
  // id
  const id = req.params.id;
  // kiểm tra id

  const getTodoById = await db.todos.findOne({ _id: new ObjectId(id) });

  if (!getTodoById) {
    return res.json({
      message: "Todo not found",
    });
  }
  // get todo từ database
  res.json({
    data: getTodoById,
  });
});

router.post("/", async (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      message: "Missing required key",
    });
  }

  const newTodo = {
    title,
    isCompleted: false,
  };

  await db.todos.insertOne(newTodo);

  res.status(201).json({
    message: "Create successfully",
  });
});
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { title, isCompleted } = req.body;

  const exitstingTodo = await db.todos.findOne({ _id: new ObjectId(id) });

  if (!exitstingTodo) {
    return res.status(400).json({
      message: "Todo not found",
    });
  }

  const updateTodos = {
    ...(title && { title }),
    ...(isCompleted && { isCompleted }),
  };

  await db.todos.updateOne({ _id: new ObjectId(id) }, { $set: updateTodos });

  res.status(200).json({
    message: "Update successfully",
  });
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const exitstingTodo = await db.todos.findOne({ _id: new ObjectId(id) });

  if (!exitstingTodo) {
    return res.status(400).json({
      message: "Todo not found",
    });
  }

  await db.todos.deleteOne({ _id: new ObjectId(id) });

  return res.json({
    message: "Delete successfully",
  });
});

export default router;
