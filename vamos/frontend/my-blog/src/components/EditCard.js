import React, { useState } from "react";
import axios from "axios";

const EditableCard = ({
  id,
  imageSrc,
  title,
  content,
  createdAt,
  updatedAt,
}) => {
  const [editing, setEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedContent, setUpdatedContent] = useState(content);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    axios
      .put(`/posts/${id}`, {
        title: updatedTitle,
        content: updatedContent,
      })
      .then((response) => {
        setSuccessMessage("Los cambios se realizaron con éxito");
        setEditing(false);
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("No se pudo realizar la petición. Intenta más tarde");
      });
  };

  const handleCancelClick = () => {
    setEditing(false);
    setUpdatedTitle(title);
    setUpdatedContent(content);
  };

  return (
    <div className="card">
      <img src={imageSrc} alt={title} />
      <div className="card-body">
        {editing ? (
          <>
            <input
              type="text"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
            <textarea
              value={updatedContent}
              onChange={(e) => setUpdatedContent(e.target.value)}
            />
            <button onClick={handleSaveClick}>Guardar</button>
            <button onClick={handleCancelClick}>Cancelar</button>
          </>
        ) : (
          <>
            <h2>{title}</h2>
            <p>{content}</p>
            <button onClick={handleEditClick}>Editar</button>
          </>
        )}
        {successMessage && <p className="success">{successMessage}</p>}
        {errorMessage && <p className="error">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default EditableCard;
