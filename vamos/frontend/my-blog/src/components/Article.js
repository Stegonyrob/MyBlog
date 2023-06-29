import React, { useState } from "react";
import Card from "./Card";
import ReactPaginate from "react-paginate";

const Article = ({ cards }) => {
  console.log(cards);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 6;

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
          {currentCards.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              content={card.content}
              createdAt={card.createdAt}
            />
          ))}
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
