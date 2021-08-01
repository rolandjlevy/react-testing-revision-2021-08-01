import React, { useState } from 'react';
import axios from 'axios';

const Clicker = () => {
  const [post, setPostData] = useState(null);
  const [checkboxState, toggleCheckbox] = useState(false);
  const [counter, setCounter] = useState(0);
  const handleClick = (n) => {
    setCounter(counter + n);
    const state = counter + n > 5;
    toggleCheckbox(state);
  }

  const getPosts = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    await setPostData(data);
    console.log(data)
  }
  return (
    <>
      <h1 aria-label="title">Counter: {counter}</h1>

      <section>

        <p>
          <button aria-label="button" onClick={() => handleClick(-1)}>decrement</button>
          <button aria-label="button" onClick={() => handleClick(1)}>increment</button>
        </p>

        <label>Switch on if counter > 5</label>
        <input type="checkbox" checked={checkboxState} />

      </section>

      <hr />

      <section>
        <button onClick={getPosts}>Load data</button>
        {post && JSON.stringify(post)}
      </section>

    </>
  )
}

export default Clicker;