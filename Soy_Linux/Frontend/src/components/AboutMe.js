import axios from "axios";
import React, { useEffect, useState } from "react";
import AbautCard from "./AbautCard";

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
        {cards.map((card, index) => (
          <AbautCard
            key={index}
            title={card.title}
            content={card.coment}
            createdAt={card.createdAt}
          />
        ))}
      </div>
    </article>
  );
};

export default AboutMe;
