// Componente para el botón "Editar"
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Col } from "react-bootstrap";
const EditButton = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const handleEditClick = () => {
    navigate(`/editbox/${id}`);
  };

  return (
    <Button variant="primary" onClick={() => navigate(`/editbox/${id}`)}>
      Editar
    </Button>
  );
};

export default EditButton;
