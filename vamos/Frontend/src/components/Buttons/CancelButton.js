// Componente para el botón "Cancelar"
import React from "react";
import { useNavigate } from "react-router-dom";

const CancelButton = () => {
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate("/");
  };

  return <button onClick={handleCancelClick}>Cancelar</button>;
};

export default CancelButton;
