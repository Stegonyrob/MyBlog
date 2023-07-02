import React from "react";
import { Card, Col } from "react-bootstrap";

const AbautCard = ({ imageSrc, title, content, createdAt }) => {
  return (
    <Col md={3}>
      <Card>
        <Card.Img variant="top" src={imageSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="full-text">{content}</Card.Text>
        </Card.Body>
        <div className="card-footer">{createdAt}</div>
      </Card>
    </Col>
  );
};

export default AbautCard;
