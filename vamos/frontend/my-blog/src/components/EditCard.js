import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Card, Col } from "react-bootstrap";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const EditableCard = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  function handleReplyClick() {
    setIsOpen(true);
  }

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
      <Card>
        <Card.Img variant="top" src={card.imageSrc} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.content}</Card.Text>
          <Button variant="primary" to={`/editbox/${card.id}`}>
            Leer más
          </Button>
          {isOpen && (
            <Button
              variant="primary"
              onClick={handleReplyClick}
              content={<FontAwesomeIcon icon={faPenNib} />}
              id="new-post-image"
              title="open"
              to={`/editbox/${card.id}`}
            >
              Editar
            </Button>
          )}
        </Card.Body>
        <div className="card-footer">{card.createdAt}</div>
      </Card>
    </Col>
  );
};

export default EditableCard;
