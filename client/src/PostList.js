import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

function PostList() {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4002/posts');

    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div className="row">
        <div className="col-2-of-4">
          <div className="feature-box">
            <h3 key={post.id}>{post.title}</h3>
            <CommentList comments={post.comments} />
            <CommentCreate postId={post.id} />
          </div>
        </div>
      </div>
    );
  });

  return <div>{renderedPosts}</div>;
}

export default PostList;
