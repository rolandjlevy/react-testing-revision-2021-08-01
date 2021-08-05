import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const GetPosts = () => {

  const [posts, setPosts] = useState([]);

  const loadPosts = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(data);
  }

  return (
    <>
      <h1>Get Posts</h1>
      <button onClick={loadPosts}>Load posts</button>
      {posts && posts.map((post, index) => {
        return <h5><b>Title {index+1}:</b> {post.title}</h5>
      })}
    </>
  )
}

export default GetPosts;