import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import {
  faPenNib,
  faPaperPlane,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function EditBox({ onReply, id, title, content }) {
  const [replyTitle, setReplyTitle] = useState(title);
  const [replyContent, setReplyContent] = useState(content);
  const [isOpen, setIsOpen] = useState(false);

  function handleTitleChange(event) {
    setReplyTitle(event.target.value || title);
  }

  function handleContentChange(event) {
    setReplyContent(event.target.value || content);
  }

  function handleReplyClick() {
    setIsOpen(true);
  }

  function handleCloseClick() {
    setIsOpen(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .put(`http://localhost:3000/posts/change/${id}`, {
        title: replyTitle,
        content: replyContent,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    setIsOpen(false);
  }

  return (
    <div>
      <div className="btn-post-btn-font">
        <SubmitButton
          type="button"
          onClick={handleReplyClick}
          content={<FontAwesomeIcon icon={faPenNib} />}
          id="new-post-image"
          title="open"
        />

        {isOpen && (
          <div className="reply">
            <div className="card edit-box">
              <form onSubmit={handleSubmit}>
                <div className="card-body">
                  <div className="form-group">
                    <textarea
                      rows="2"
                      cols="70"
                      value={replyTitle}
                      onChange={handleTitleChange}
                      className="edit-box-textarea"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      rows="4"
                      cols="70"
                      value={replyContent}
                      onChange={handleContentChange}
                      className="edit-box-textarea"
                    />
                  </div>
                </div>
                <div className="card-footer">
                  <SubmitButton
                    type="submit"
                    content={<FontAwesomeIcon icon={faPaperPlane} />}
                    id="new-post-submit"
                    title="submit"
                  />
                  <SubmitButton
                    type="button"
                    onClick={handleCloseClick}
                    content={<FontAwesomeIcon icon={faTimes} />}
                    id="new-post-close"
                    title="close"
                  />
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EditBox;
