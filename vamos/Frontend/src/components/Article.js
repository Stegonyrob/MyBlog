import axios from "axios";
import React, { useState, useEffect } from "react";
import Cards from "./Card";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { url } from "../utils/url";
const Article = () => {
  const { id } = useParams();
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const pageSize = 4;
  const [Title, setCardsTitle] = useState("");
  const [Content, setCardsContent] = useState("");
  const [Image, setCardsImage] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts/why");
        setCards(response.data);

        console.log(response.data);
        setCardsTitle(response.data.title);
        setCardsContent(response.data.content);
        setCardsImage(response.data.image);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  if (!Array.isArray(cards) || cards === undefined) {
    return null;
  }

  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;
  const currentCards = cards.slice(startIndex, endIndex);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <article className="text-center">
      <div className="card-group articlecard">
        {currentCards.map((card, index) => {
          return (
            <Cards
              key={index}
              imageSrc={`${url}${card.image}`}
              title={<Link to={`/editcard/${card.id}`}>{card.title}</Link>}
              content={card.content}
              createdAt={card.createdAt}
            />
          );
        })}
      </div>

      <ReactPaginate
        pageCount={Math.ceil(cards.length / pageSize)}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
        previousLinkClassName="previous"
        nextLinkClassName="next"
        disabledClassName="disabled"
      />
    </article>
  );
};

export default Article;
