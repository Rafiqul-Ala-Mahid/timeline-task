import { useState, useEffect } from "react";
import Post from "../components/Post";

const Timeline = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostsAndUsers = async () => {
      const postsResponse = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const usersResponse = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const postsData = await postsResponse.json();
      const usersData = await usersResponse.json();

      // Sort posts by ID in descending order
      postsData.sort((a, b) => b.id - a.id);

      setPosts(postsData);
      setUsers(usersData);
      setLoading(false);
    };

    fetchPostsAndUsers();
  }, []);

  const findUserById = (userId) => {
    return users.find((user) => user.id === userId);
  };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} user={findUserById(post.userId)} />
      ))}
    </div>
  );
};

export default Timeline;
