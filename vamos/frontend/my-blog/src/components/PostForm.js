import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { faImage } from "@fortawesome/free-solid-svg-icons";

function PostForm({ onCreatePost, history }) {
  const [title, setTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const postData = {
      title: title,
      content: postContent,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/posts/send",
        postData
      );
      console.log(response.data);
      onCreatePost(response.data);
      setTitle("");
      setPostContent("");
      setImage(null);
      history.push("/home");
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };
  return (
    <div className="new-post-card default-card">
      <h3>
        <i className="fa-solid fa-pen-nib icon" title="Nueva publicación"></i>
        NUEVA PUBLICACIÓN
      </h3>

      <form onSubmit={handleSubmit} noValidate>
        <div>
          <textarea
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="new-post"
            cols="70"
            rows="2"
            placeholder="Titulo..."
          ></textarea>
        </div>
        <div>
          <textarea
            value={postContent}
            onChange={(event) => setPostContent(event.target.value)}
            className="new-post"
            cols="70"
            rows="2"
            placeholder="ESCRIBIR POST..."
          ></textarea>
        </div>
        <div className="insert">
          <label htmlFor="imageInput">
            <i className="fa-solid fa-image icon"></i>
          </label>
          <input
            type="file"
            id="imageInput"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
          <button type="submit" content="Enviar">
            enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostForm;