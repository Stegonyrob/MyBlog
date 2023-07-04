// Componente para el botón "Borrar"
import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const DeleteButton = ({ id }) => {
  const navigate = useNavigate();

  const handleDeleteClick = async () => {
    try {
      await axios.delete(`http://localhost:3000/posts/why/${id}`);
      alert("El post ha sido borrado exitosamente");
      navigate("/home");
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  return (
    <Button variant="primary" onClick={handleDeleteClick}>
      Borrar
    </Button>
  );
};

export default DeleteButton;
