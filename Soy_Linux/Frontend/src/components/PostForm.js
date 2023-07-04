import React, { useState, useRef } from "react";
import axios from "axios";
import { Card, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function PostForm() {
  const [title, setTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [image, setImage] = useState({});
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const postData = {
      title: title,
      content: postContent,
      image: image,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/posts/send",
        postData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);

      setTitle("");
      setPostContent("");
      setImage({});
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <Col md={10}>
      <Card bg="dark" className="postbox">
        <h1>NUEVA PUBLICACIÓN</h1>
        <form onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="new-post"
              placeholder="Titulo..."
            />
          </div>
          <div>
            <label htmlFor="postContent">Contenido</label>
            <input
              type="text"
              value={postContent}
              onChange={(event) => setPostContent(event.target.value)}
              className="new-post"
              cols="70"
              rows="3"
              placeholder="ESCRIBIR POST..."
            />
          </div>
          <div className="insert">
            <div>
              {" "}
              <div className="insert">
                <div>
                  <label htmlFor="postContent">Insertar Imagen</label>
                </div>
                <Button type="button" onClick={handleButtonClick}>
                  Insertar imagen
                </Button>
                <input
                  type="file"
                  id="imageInput"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  ref={fileInputRef}
                  style={{ display: "none" }}
                />
                <a> </a>
                <Button type="submit" content="Enviar">
                  Enviar
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Card>
    </Col>
  );
}

export default PostForm;
