import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import { Link, useParams } from "react-router-dom";
import SubmitButton from "./SubmitButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
const EditableCard = (onAddClick) => {
  const { id } = useParams();
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
  function handleReplyClick() {
    setIsOpen(true);
  }

  return (
    <article className="text-center">
      <div className="container-fluid">
        <div className="card-group">
          <Card
            key={card.id}
            imageSrc={card.imageSrc}
            title={card.title}
            content={card.content}
            createdAt={card.createdAt}
          />
        </div>
        <SubmitButton
          type="button"
          content={<FontAwesomeIcon icon={faPenNib} />}
          id="new-post-image"
          title="open"
          as={Link}
          to={`/editbox/${card.id}`}
          onClick={onAddClick}
        ></SubmitButton>
      </div>
    </article>
  );
};

export default EditableCard;
