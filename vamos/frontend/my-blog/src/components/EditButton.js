import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SubmitButton from "./SubmitButton";
import React from "react";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
function EditButton({ onAddClick, id }) {
  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <SubmitButton
      type="button"
      content={<FontAwesomeIcon icon={faPenNib} />}
      id="new-post-image"
      title="open"
      as={Link}
      to={`/editbox/${id}`}
      onClick={onAddClick}
    ></SubmitButton>
  );
}
export default EditButton;
