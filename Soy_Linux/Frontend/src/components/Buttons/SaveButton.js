import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SaveButton = ({
  id,
  editedTitle,
  editedContent,
  editedImageSrc,
  card,
}) => {
  const navigate = useNavigate();
  const handleSaveClick = async () => {
    try {
      const updatedCard = {
        ...card,
        title: editedTitle,
        content: editedContent,
        imageSrc: editedImageSrc || card.image,
      };
      console.log(updatedCard);
      await axios.put(`http://localhost:3000/posts/why/${id}`, updatedCard, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Post editado exitosamente");
      navigate("/home");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Button variant="primary" onClick={handleSaveClick}>
      Guardar
    </Button>
  );
};

export default SaveButton;
