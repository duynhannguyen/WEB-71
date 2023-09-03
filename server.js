import express, { json } from "express";
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

let postComment = [
  {
  id:"1",
  comment: "khóa học này bổ ích quá"
},
{
  id:"2",
  comment: "Giảng viên dạy rất có tâm"
},
{
  id:"3",
  comment: "Rap việt mùa này cháy quá"
},
{
  id: "4",
  comment: "Vòng chung kết căng quá"
},
{
  id: "5",
  comment: "Bạn DJ đánh hay ghê"
},
{
  id: "6",
  comment: "Vòng chung kết căng quá"
},
]

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
/*
app.get("/posts/comment", (req, res) =>{
  res.json({
    dataComment:postComment,
  })
})

app.get("/posts/comment/:id", (req,res)=>{
  const { id } = req.params;
  const exitstingComment = postComment.find((comments) => comments.id === id)
  if(!exitstingComment){
    return res.json({
      message: "Comment not found"
    })
  } else{
    return res.json({
      postCommentId: exitstingComment
    })
  }
})

app.post("/posts/comment", (req, res) => {
  const {comment} = req.body
  if(!comment){
    res.json({
      message:"Comment not found"
    })
  }
  postComment.push({
    id: uuidv4(),
    comment
  })
  res.json({
    dataComment: postComment,
  })
})

app.put("/posts/comment/:id", (req, res)=>{
  const {id} = req.params
  const {comment} = req.body
  const exitstingComment = postComment.findIndex((comment) =>comment.id === id)
  if(exitstingComment === -1){
    return res.status(400).json({
      message:"Comment not found"
    })
  }
  postComment[exitstingComment] = {...postComment[exitstingComment],comment}
  res.json({
    dataComment: postComment,
  })
})

app.delete("/posts/comment/:id", (req, res)=>{
  const {id} = req.params
  const exitstingComment = postComment.findIndex((comment) => comment.id === id)
  if(exitstingComment === -1){
    return res.status(400).json({
      message:"Comment not found"
    })
  }
  postComment.splice(postComment[exitstingComment], 1)
  res.json({
    message: "Comment delete successfully",
  })
})
*/

// get all post
app.get("/posts", (req, res) => {
  res.json({
    data: posts,
    comment: postComment,
  });
});

// get  post by id
app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  const existingPost = posts.find((post) => post.id === id);
  const exitstingComment = postComment.find((comment) => comment.id === id)
  if (!existingPost && !exitstingComment) {
    return res.json({
      message: "Post not found",
      messageComment: "Comment not found"
    });
  } else {
    return res.json({
      data: existingPost,
      comment: exitstingComment,

    });
  }
});

// create new post
app.post("/posts", (req, res) => {
  const { title, description,comment } = req.body;

  if (!title || !description ||!comment) {
    res.status(400).json({
      message: "Missing required key",
    });
  }
  const postId = uuidv4()
  posts.push({
    id: postId,
    title,
    description,
  });
  postComment.push({
    id: postId,
    comment,
  })
  res.json({
    data: posts,
    comment: postComment,
  });
});
// cập nhật post thông qua id
app.put("/posts/:id", (req, res) => {
  const body = req.body;
console.log("body:", body);
  const { id } = req.params;
  const exitstingPostIndex = posts.findIndex((post) => post.id === id);
  const exitstingComment = postComment.findIndex((comment) => comment.id === id)
  if (exitstingPostIndex === -1 || exitstingComment === -1 ) {
    res.status(400).json({
      message: "Post not found and comment not found ",
    });
  }
  posts[exitstingPostIndex] = { ...posts[exitstingPostIndex], ...body };
  postComment[exitstingComment] = {...postComment[exitstingComment], ...comment}
  return res.json({ data: posts,
  dataComent: postComment, });
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



// app.get("/posts/comment/:id", (req,res)=>{
//   const {id} = req.params
//   const exitstingComment = postComment.find((comment) => comment.id === id)
//   if(!exitstingComment){
//     return res.json({
//       message: "Comment not found"
//     })
//   } else{
//     return res.json({
//       postCommentId: exitstingComment
//     })
//   }
// })
