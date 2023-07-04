import React from "react";
import { Card, Col } from "react-bootstrap";

const AbautCard = ({ title, content }) => {
  return (
    <Col md={3}>
      <div className="container-fluid">
        <Card bg="dark" className="abautcard">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text className="full-text">{content}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default AbautCard;
