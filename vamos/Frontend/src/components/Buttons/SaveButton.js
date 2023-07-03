import React from "react";
import axios from "axios";

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

  return <button onClick={handleSaveClick}>Guardar</button>;
};

export default SaveButton;
