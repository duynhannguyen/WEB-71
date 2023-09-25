import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import postApi from "../../lesson06-mongodb-crud/service/postApi.js";
function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState("");
  const fetchData = async () => {
    try {
      setLoading(true);
      const posts = await postApi.getAll();
      setPosts(posts.data.data);
      console.log(posts);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const listPost =
    posts.length === 0 ? (
      <h3> Empty post </h3>
    ) : (
      <div>
        {posts.map((post) => {
          return (
            <div
              key={post._id}
              style={{
                background: "#fff",
                borderRadius: "8px",
                padding: "24px",
                color: "#000",
                marginBottom: "24px",
              }}
            >
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
          );
        })}
      </div>
    );
  if (loading) {
    return <p> Fetching posts</p>;
  }
  return <div>{listPost}l</div>;
}

export default App;
