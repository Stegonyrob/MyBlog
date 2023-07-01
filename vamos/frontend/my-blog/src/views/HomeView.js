import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Article from "../components/Article";
import CustomNavbar from "../components/NavBar";
import Footer from "../components/Footer";
import PostForm from "../components/PostForm";

export default function HomeView() {
  const [showForm, setShowForm] = useState(false);
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  const handleAddClick = () => {
    setShowForm(true);
  };

  const handleCreatePost = (post) => {
    setPosts([post, ...posts]);
    navigate("/");
  };

  // Ordena la lista de publicaciones por fecha de creación en orden descendente
  const sortedPosts = [...posts].sort((a, b) => b.createdAt - a.createdAt);

  return (
    <div>
      <CustomNavbar onAddClick={handleAddClick} />
      {showForm ? (
        <PostForm onCreatePost={handleCreatePost} />
      ) : (
        <Article cards={sortedPosts} />
      )}
      <Footer />
    </div>
  );
}
