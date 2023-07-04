import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Card, Col } from "react-bootstrap";
import { url } from "../utils/url";
const EditableCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/posts/why/${id}`
        );
        setCard(response.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [id]);

  if (!card) {
    return null;
  }

  return (
    <Col md={3}>
      <Card bg="dark" className="editcard cardimage">
        <Card.Img variant="top" src={`${url}${card.image}`} />
        <Card.Body>
          <Card.Title className="cardtext">{card.title}</Card.Title>
          <Card.Text className="cardtext">{card.content}</Card.Text>
          <Button variant="primary" onClick={() => navigate(`/postcard/${id}`)}>
            Leer más
          </Button>
        </Card.Body>
        <div className="card-footer">{card.createdAt}</div>
      </Card>
    </Col>
  );
};

export default EditableCard;
