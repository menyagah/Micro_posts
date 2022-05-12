import React from 'react';

function PostCreate() {
  return (
    <div>
      <form>
        <div className="form__group">
          <label className="form__label">Title</label>
          <input className="form__input" type="text" />
        </div>
        <div className="form__group">
          <button className="btn btn--primary">Create Post</button>
        </div>
      </form>
    </div>
  );
}

export default PostCreate;
