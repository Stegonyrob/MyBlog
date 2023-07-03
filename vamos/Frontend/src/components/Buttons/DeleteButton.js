// Componente para el botón "Borrar"
import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
const DeleteButton = ({ id }) => {
  const handleDeleteClick = async () => {
    try {
      await axios.delete(`http://localhost:3000/posts/why/${id}`);
      // Realizar cualquier acción adicional después de borrar exitosamente
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button variant="primary" onClick={handleDeleteClick}>
      Borrar
    </Button>
  );
};

export default DeleteButton;
