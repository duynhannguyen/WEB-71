import express from "express";

import { db } from "../config/database.js";
import { ObjectId } from "mongodb";
import postController from "../controller/post.controller.js";

const router = express.Router();

// Get all
router.get("/", postController.getPost);

// Get single by id
router.get("/:id", postController.getSingleById);

// Create
router.post("/", postController.createPost);

// Update
router.put("/:id", postController.updatePost);

router.delete("/:id", postController.deletePost);

export default router;

/*
  ?page=1&limit=10
  totalItems = 26
  limit = 10

  => totalPages = 3
    => page 1-> 1-10
    => page 2-> 11-20
    => page 3-> 21-26

  formula = (page - 1)*limit = 0
    page=2 => (2 - 1)*10 = 10 => 10 -> 20
    page=3 => (3 - 1)*10 = 20 => 20 -> 30
*/
