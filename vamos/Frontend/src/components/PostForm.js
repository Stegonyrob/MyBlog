import React, { useState, useRef } from "react";
import axios from "axios";
import { Card, Button, Col } from "react-bootstrap";

function PostForm({ onCreatePost, history }) {
  const [title, setTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const fileInputRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const postData = {
      title: title,
      content: postContent,
      imageUrl: imageUrl,
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
      setImageUrl("");

      history.push("/home");
    } catch (error) {
      console.error(error);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = async (event) => {
    setImage(event.target.files[0]);

    const formData = new FormData();
    formData.append("image", event.target.files[0]);

    try {
      const uploadResponse = await axios.post(
        "http://localhost:3000/posts/send/uploadImage",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(uploadResponse.data);
      setImageUrl(uploadResponse.data.imageUrl);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Col>
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
            <textarea
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
              <div className="insert">
                <div>
                  <label htmlFor="imageInput">Insertar Imagen</label>
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
              </div>
            </div>
            <Button type="submit" content="Enviar">
              Enviar
            </Button>
          </div>
        </form>
      </Card>
    </Col>
  );
}

export default PostForm;
