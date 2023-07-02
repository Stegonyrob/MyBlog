import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";

const EditButton = ({ id }) => {
  return (
    <div className="d-flex">
      <Link to={`/editbox/${id}`}>
        <button className="btn">
          <FontAwesomeIcon icon={faPenNib} />
        </button>
      </Link>
    </div>
  );
};

export default EditButton;
