import axios from 'axios';
import React from 'react';
import { useState } from 'react';

function PostCreate() {
  const [title, setTitle] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:4000/posts', {
      title,
    });
    setTitle('');
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <div className="form__group">
          <label className="form__label">Title</label>
          <input
            className="form__input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Create Your Post Title Here"
            type="text"
            id="message"
            required
          />
        </div>
        <div className="form__group">
          <button className="btn btn--blue">Create Post</button>
        </div>
      </form>
    </div>
  );
}

export default PostCreate;
