import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const GetPost = () => {

  const [post, setPostData] = useState(null);

  const getPost = async () => {
    await setPostData(null);
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    await setPostData(data);
  }
  return (
    <>
      <h1>Get Single Post</h1>

      <section>

        <button onClick={getPost}>Load data</button>

        {post && 
          <>
            <code>
              <pre>
                {JSON.stringify(post, undefined, 2)}
              </pre>
            </code>
            <h4>Title: {post.title}</h4>
            <h5>Body: {post.body}</h5>
          </>
        }

      </section>

    </>
  )
}

export default GetPost;