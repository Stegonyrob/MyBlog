import React from "react";

const Card = ({ imageSrc, title, content, createdAt }) => {
  return (
    <div className="card border-success mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-header bg-transparent border-success">
        <img src={imageSrc} className="card-img-top" alt="..." />
      </div>
      <div className="card-body text-success">{title}</div>
      <div className="card-body text-success">{content}</div>
      <div className="card-footer bg-transparent border-success">
        {createdAt}
      </div>
    </div>
  );
};

export default Card;
