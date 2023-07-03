// Componente para el botón "Borrar"
import React from "react";
import axios from "axios";

const DeleteButton = ({ id }) => {
  const handleDeleteClick = async () => {
    try {
      await axios.delete(`http://localhost:3000/posts/why/${id}`);
      // Realizar cualquier acción adicional después de borrar exitosamente
    } catch (error) {
      console.error(error);
    }
  };

  return <button onClick={handleDeleteClick}>Borrar</button>;
};

export default DeleteButton;
