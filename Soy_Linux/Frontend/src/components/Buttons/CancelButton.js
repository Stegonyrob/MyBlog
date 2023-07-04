// Componente para el botón "Cancelar"
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
const CancelButton = () => {
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate("/");
  };

  return (
    <Button variant="primary" onClick={handleCancelClick}>
      Cancelar
    </Button>
  );
};

export default CancelButton;
