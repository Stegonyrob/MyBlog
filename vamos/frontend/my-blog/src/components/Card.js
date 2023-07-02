import React from "react";
import { Button, Card, Col } from "react-bootstrap";

import Truncate from "react-text-truncate";
import SubmitButton from "./SubmitButton";
import { Link, useParams } from "react-router-dom";

const Cards = ({ imageSrc, title, content, createdAt }) => {
  const { id } = useParams();

  return (
    <Col md={3}>
      <Card>
        <Card.Img variant="top" src={imageSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <Truncate
              line={6} // Muestra solo 2 líneas de texto
              element="span" // Utiliza un elemento <span> para el texto truncado
              truncateText="..." // Texto que se muestra al truncar el texto
              text={content} // Texto original
            />
          </Card.Text>
          <SubmitButton content="Leer más" to={`/editcard/${id}`} />
        </Card.Body>
        <div className="card-footer">{createdAt}</div>
      </Card>
    </Col>
  );
};

export default Cards;
