import React, { useState } from 'react';

const Clicker = () => {

  const [checkboxState, toggleCheckbox] = useState(false);
  const [counter, setCounter] = useState(0);

  const limit = 5;

  const handleClick = (n) => {
    const state = counter + n > limit;
    toggleCheckbox(state);
    setCounter(counter + n);
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

    </>
  )
}

export default Clicker;