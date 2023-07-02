import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import { Link, useParams } from "react-router-dom";

import EditButton from "./EditButton";

const EditableCard = ({ onClick }) => {
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
        <EditButton />
      </div>
    </article>
  );
};

export default EditableCard;
