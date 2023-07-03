import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Truncate from "react-text-truncate";

import { Link, useParams } from "react-router-dom";

const Cards = ({ imageSrc, title, content, createdAt }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <Col md={3}>
      <Card>
        <Card.Img variant="top" src={imageSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <Truncate
              line={6}
              element="span"
              truncateText="..."
              text={content}
            />
          </Card.Text>
        </Card.Body>
        <div className="card-footer">{createdAt}</div>
      </Card>
    </Col>
  );
};

export default Cards;
