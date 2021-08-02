import React, { useState } from 'react';
import axios from 'axios';

const Clicker = () => {

  const [post, setPostData] = useState(null);
  const [checkboxState, toggleCheckbox] = useState(false);
  const [counter, setCounter] = useState(0);

  const limit = 5;

  const handleClick = (n) => {
    const state = counter + n > limit;
    toggleCheckbox(state);
    setCounter(counter + n);
  }

  const getPosts = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    await setPostData(data);
  }
  return (
    <>
      <h1>Counter: {counter}</h1>

      <section>

        <p>
          <button onClick={() => handleClick(-1)}>decrement</button>
          <button onClick={() => handleClick(1)}>increment</button>
        </p>

        <label>Switch on if counter > {limit}</label>
        <input type="checkbox" readOnly checked={checkboxState} />

      </section>

      <hr />

      <section>

        <button onClick={getPosts}>Load data</button>
        {post && 
          <code>
            <pre>
              {JSON.stringify(post, undefined, 2)}
            </pre>
          </code>
        }

      </section>

    </>
  )
}

export default Clicker;