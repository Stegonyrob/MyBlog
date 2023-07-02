import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import App from "../App.css";
const EditBox = ({ card }) => {
  const { id } = card;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setTitle(card.title);
    setContent(card.content);
    setImageSrc(card.imageSrc);
  }, [card]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageSrcChange = (e) => {
    setImageSrc(e.target.value);
  };

  const handleDeleteClick = async () => {
    try {
      await axios.delete(`http://localhost:3000/posts/why/${id}`);
      navigate("/");
    } catch (e) {
      console.error(e);
    }
  };

  const handleSaveClick = async () => {
    try {
      await axios.put(`http://localhost:3000/posts/why/${id}`, {
        title,
        content,
        imageSrc,
      });
      navigate(`/card/${id}`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <h1>Edición de los Post</h1>
          <form>
            <div className="form-group">
              <label htmlFor="title">Títulos</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={title}
                onChange={handleTitleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">Contenido</label>
              <textarea
                className="form-control"
                id="content"
                rows="3"
                value={content}
                onChange={handleContentChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="imageSrc">Imagén</label>
              <input
                type="text"
                className="form-control"
                id="imageSrc"
                value={imageSrc}
                onChange={handleImageSrcChange}
              />
            </div>
            <button
              type="button"
              className="btn btn-danger mr-2"
              onClick={handleDeleteClick}
            >
              Delete
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSaveClick}
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBox;
