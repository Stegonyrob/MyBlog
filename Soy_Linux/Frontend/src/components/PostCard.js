import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Card, Col } from "react-bootstrap";
import EditButton from "./Buttons/EditButton";
import { url } from "../utils/url";
const PostCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  function handleReplyClick() {
    navigate(`/editbox/${card.id}`, { state: { card } });
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
    <Col md={6}>
      <Card bg="dark" className="postcard">
        <Card.Img variant="top" src={`${url}${card.image}`} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.content}</Card.Text>
          <EditButton id={card.id} />
        </Card.Body>
        {isOpen && <EditButton id={card.id} />}
        <div className="card-footer">{card.createdAt}</div>
      </Card>
    </Col>
  );
};

export default PostCard;
