import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const AboutMe = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts/abaut");
        setCards(response.data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

  if (!Array.isArray(cards) || cards === undefined) {
    return null;
  }

  return (
    <article className="text-center">
      <div className="container-fluid">
        <div className="card-group">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              content={card.coment}
              createdAt={card.createdAt}
            />
          ))}
        </div>
      </div>
    </article>
  );
};

export default AboutMe;
