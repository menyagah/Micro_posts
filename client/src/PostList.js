import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function PostList() {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4000/posts');

    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div className="row">
        <div className="col-2-of-4">
          <div key={post.id} className="feature-box">
            <h3>{post.title}</h3>
          </div>
        </div>
      </div>
    );
  });

  return <div>{renderedPosts}</div>;
}

export default PostList;
