import React from "react";
import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Truncate from "react-text-truncate";
import { useParams } from "react-router-dom";
import DeleteButton from "./Buttons/DeleteButton";

const Cards = ({ id, imageSrc, title, content, createdAt }) => {
  //const { id } = useParams();
  const navigate = useNavigate();

  return (
    <Col md={3}>
      <Card bg="dark">
        <Card.Img variant="top" className="cardimage " src={imageSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="cardtext">
            <Truncate
              line={4}
              element="span"
              truncateText="..."
              text={content}
            />
          </Card.Text>
          <DeleteButton id={id} />
        </Card.Body>
        <div className="card-footer">{createdAt}</div>
      </Card>
    </Col>
  );
};

export default Cards;
