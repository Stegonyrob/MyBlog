import axios from "axios";
import React, { useState, useEffect } from "react";
import Cards from "./Card";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
const Article = () => {
  const { id } = useParams();
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const pageSize = 4;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts/why");
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

  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;
  const currentCards = cards.slice(startIndex, endIndex);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <article className="text-center">
      <div className="container-fluid">
        <div className="card-group">
          {currentCards.map((card, index) => {
            console.log("ID del post:", card.id);
            return (
              <Cards
                key={index}
                imageSrc={card.imageSrc}
                title={<Link to={`/editcard/${card.id}`}>{card.title}</Link>}
                content={card.content}
                createdAt={card.createdAt}
              />
            );
          })}
        </div>
      </div>
      <ReactPaginate
        pageCount={Math.ceil(cards.length / pageSize)}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
      />
    </article>
  );
};

export default Article;