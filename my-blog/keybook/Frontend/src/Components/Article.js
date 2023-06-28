import React from "react";
import Card from "./Card";
import ReactPaginate from "react-paginate";

const Article = ({ cards }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const pageSize = 6;
  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;
  const currentCards = cards.slice(startIndex, endIndex);
  return (
    <article className="text-center">
      <div className="container-fluid">
        <div className="card-group">
          {cards.map((card, index) => (
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
        pageCount={Math.ceil(cards.length / 10)}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
      />
    </article>
  );
};
export default Article;
