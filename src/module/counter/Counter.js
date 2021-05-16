import React, { useState } from 'react';
import './Counter.css';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [showError, setShowError] = useState(false);

  const incrementCounter = () => {
    if (showError) {
      setShowError(false);
      setCount(count + 1);
    } else {
      setCount(count + 1);
    }
  };
  return (
    <div data-test="counter">
      <h1>
        The count is <span data-test="counter-val">{count}</span>
      </h1>
      <div className={showError ? 'error-msg' : 'hidden'} data-test="error-msg">
        The counter cannot go below 0.
      </div>
      <span>
        <button data-test="increment-btn" onClick={incrementCounter}>
          +
        </button>
        <button
          data-test="decrement-btn"
          onClick={() => {
            count === 0 ? setShowError(true) : setCount(count - 1);
          }}
        >
          -
        </button>
      </span>
    </div>
  );
}
