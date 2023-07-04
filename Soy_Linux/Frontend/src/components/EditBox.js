import React, { useState, useEffect, useRef } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import DeleteButton from "../components/Buttons/DeleteButton";
import SaveButton from "../components/Buttons/SaveButton";
import CancelButton from "../components/Buttons/CancelButton";
import axios from "axios";
import { Col } from "react-bootstrap";
import EditableInput from "../components/EditableInput";
import { url } from "../utils/url";

const EditBox = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");
  const [editedImageSrc, setEditedImageSrc] = useState({});
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/posts/why/${id}`
        );
        setCard(response.data);
        console.log(card);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  if (!card) {
    navigate("/home");
  }

  const handleCancel = () => {
    setIsOpen(false);
    setEditedTitle(card.title);
    setEditedContent(card.content);
    setEditedImageSrc(card.image);
  };
  /* Futura implementación de edición de imagen */
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const handleImageChange = (event) => {
    setEditedImageSrc(event.target.files[0]);
  };
  return (
    <Col>
      <Card bg="dark" className="editbox">
        <h1>Edición de los Post</h1>
        <form>
          <div className="d-flex">
            <Card.Img variant="top" src={`${url}${card.image}`} />
            <div className="mx-3">
              <h1> {card.title}</h1>
              <h4> {card.content}</h4>
            </div>
          </div>
          <EditableInput
            label="Título"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <EditableInput
            label="Contenido"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <div className="insert">
            <div className="d-flex justify-content-end">
              {/* Futura implementación de edición de imagen */}
              {/* <Button type="button" onClick={handleButtonClick}>
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
              /> */}
              <SaveButton
                id={id}
                editedTitle={editedTitle}
                editedContent={editedContent}
                editedImageSrc={editedImageSrc}
                card={card}
              />
              <CancelButton onClick={handleCancel} />
              <DeleteButton id={id} />
            </div>
          </div>
        </form>
      </Card>
    </Col>
  );
};

export default EditBox;
