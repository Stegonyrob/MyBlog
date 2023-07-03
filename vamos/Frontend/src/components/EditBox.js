import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import EditButton from "../components/Buttons/EditButton";
import DeleteButton from "../components/Buttons/DeleteButton";
import SaveButton from "../components/Buttons/SaveButton";
import CancelButton from "../components/Buttons/CancelButton";
import axios from "axios";
import { Col } from "react-bootstrap";
import EditableInput from "../components/EditableInput";

const EditBox = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");
  const [editedImageSrc, setEditedImageSrc] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/posts/why/${id}`
        );
        setCard(response.data);
        setEditedTitle(response.data.title);
        setEditedContent(response.data.content);
        setEditedImageSrc(response.data.imageSrc);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [id]);

  if (!card) {
    return null;
  }

  const handleSave = async () => {
    try {
      const updatedCard = {
        ...card,
        title: editedTitle,
        content: editedContent,
        imageSrc: editedImageSrc,
      };
      await axios.put(`http://localhost:3000/posts/why/${id}`, updatedCard);
      navigate("/");
    } catch (e) {
      console.error(e);
    }
  };

  const handleCancel = () => {
    setIsOpen(false);
    setEditedTitle(card.title);
    setEditedContent(card.content);
    setEditedImageSrc(card.imageSrc);
  };

  return (
    <Col>
      <Card bg="dark" className="editbox">
        <h1>Edición de los Post</h1>
        <form>
          <Card.Img variant="top" src={card.imageSrc} />
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
          <EditableInput
            label="URL de la imagen"
            value={editedImageSrc}
            onChange={(e) => setEditedImageSrc(e.target.value)}
          />
          <div className="d-flex justify-content-end">
            <SaveButton
              id={id}
              editedTitle={editedTitle}
              editedContent={editedContent}
              editedImageSrc={editedImageSrc}
            />

            <CancelButton onClick={handleCancel} />

            <DeleteButton id={id} />
          </div>
        </form>
      </Card>
    </Col>
  );
};

export default EditBox;
