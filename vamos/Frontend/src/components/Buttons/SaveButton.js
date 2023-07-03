import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
const SaveButton = ({ id, editedTitle, editedContent, editedImageSrc }) => {
  const handleSaveClick = async () => {
    try {
      const updatedCard = {
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

  return (
    <Button variant="primary" onClick={handleSaveClick}>
      Guardar
    </Button>
  );
};

export default SaveButton;
