import React, { useState } from 'react';
import axios from 'axios';

function CommentCreate({ postId }) {
  const [content, setContent] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });
    setContent('');
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <div className="form__group"></div>
        <label className="form__label">New Comment</label>
        <input
          className="form__input"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Create Your Post Title Here"
          type="text"
          id="message"
          required
        />
        <div className="form__group">
          <button className="btn btn--blue">New Comment</button>
        </div>
      </form>
    </div>
  );
}

export default CommentCreate;
