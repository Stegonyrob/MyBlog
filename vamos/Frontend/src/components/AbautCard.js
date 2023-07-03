import React from "react";
import { Card, Col } from "react-bootstrap";

const AbautCard = ({ title, content, createdAt }) => {
  return (
    <Col md={3}>
      <div className="container-fluid">
        <Card className="abautcard">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text className="full-text">{content}</Card.Text>
          </Card.Body>
          <div className="card-footer">{createdAt}</div>
        </Card>
      </div>
    </Col>
  );
};

export default AbautCard;
