import React from "react";

function Post({ post, onDeletePost, onEditPost }) {
  const handleDeleteClick = () => {
    onDeletePost(post.id);
  };

  const handleEditClick = () => {
    onEditPost(post);
  };

  return (
    <div className="post-card default-card">
      <div className="post-header">
        <img
          src={post.author.avatarUrl}
          alt={post.author.name}
          className="avatar"
        />
        <div className="post-author">{post.author.name}</div>
        <div className="post-date">{post.createdAt.toLocaleString()}</div>
      </div>
      <div className="post-content">{post.content}</div>
      <div className="post-footer">
        <button onClick={handleDeleteClick}>Borrar</button>
        <button onClick={handleEditClick}>Editar</button>
        <button>Cerrar</button>
      </div>
    </div>
  );
}

export default Post;
