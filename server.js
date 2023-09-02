import express from "express";
import { v4 as uuidv4 } from "uuid";
const app = express();
const PORT = 3001;

app.use(express.json());

let posts = [
  {
    id: "1",
    title: "Master ReactJS in 4 hours",
    description: "It's free",
    author: "Harry",
  },
  {
    id: "2",
    title: "Rap Viet mua 3",
    description: "Vong chung ket Rap Viet 3",
    author: "vieon",
  },
  {
    id: "3",
    title: "Rap Viet mua 4",
    description: "Vong chung ket Rap Viet 4",
    author: "VTV",
  },
  {
    id: "4",
    title: "Master ReactJS in 4 hours",
    description: "It's free",
    author: "Harry",
  },
  {
    id: "5",
    title: "Rap Viet mua 3",
    description: "Vong chung ket Rap Viet 3",
    author: "vieon",
  },
  {
    id: "6",
    title: "Rap Viet mua 4",
    description: "Vong chung ket Rap Viet 4",
    author: "VTV",
  },
];

app.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/user", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Nhân",
    },

    {
      id: 2,
      name: "Nghĩa",
    },
  ]);
});
// get all post
app.get("/posts", (req, res) => {
  res.json({
    data: posts,
  });
});

// get  post by id
app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  const existingPost = posts.find((post) => post.id === id);
  if (!existingPost) {
    return res.json({
      message: "Post not found",
    });
  } else {
    return res.json({
      data: existingPost,
    });
  }
});

// create new post
app.post("/posts", (req, res) => {
  const { title, description } = req.body;

  console.log(req.body);

  if (!title || !description) {
    res.status(400).json({
      message: "Missing required key",
    });
  }
  posts.push({
    id: uuidv4(),
    title,
    description,
  });
  res.json({
    data: posts,
  });
});
// cập nhật post thông qua id
app.put("/posts/:id", (req, res) => {
  const body = req.body;

  const { id } = req.params;
  const exitstingPostIndex = posts.findIndex((post) => post.id === id);
  if (exitstingPostIndex === -1) {
    res.status(400).json({
      message: "Post not found",
    });
  }
  posts[exitstingPostIndex] = { ...posts[exitstingPostIndex], ...body };
  console.log(body);
  return res.json({ data: posts });
});
// xoá bài post thông qua id
app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;
  const existingPostIndex = posts.findIndex((post) => post.id === id);
  if (existingPostIndex === -1) {
    res.status(400).json({
      message: "Post not found",
    });
  }
  posts.splice(existingPostIndex, 1);
  return res.json({
    data: "Delete successfully",
  });
});
