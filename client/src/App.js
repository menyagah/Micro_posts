import React from 'react';
import './App.css';
import PostCreate from './PostCreate';
import PostList from './PostList';

function App() {
  return (
    <div className="main">
      <h1 className="heading-primary">Create Post</h1>
      <PostCreate />
      <h1 className="heading-primary">Posts</h1>
      <PostList />
    </div>
  );
}

export default App;
