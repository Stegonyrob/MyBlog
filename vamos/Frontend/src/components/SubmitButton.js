import React from "react";

function SubmitButton(props) {
  return (
    <button
      type="submit"
      className={`icon btn-post-btn  ${props.className}`}
      id={props.id}
      title={props.title}
      disabled={props.disabled}
    >
      {props.content}
    </button>
  );
}

export default SubmitButton;
