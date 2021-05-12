import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div data-test="counter">
      <h1>
        The count is <span data-test="counter-val">{count}</span>
      </h1>
      <span>
        <button data-test="increment-btn" onClick={() => setCount(count + 1)}>
          +
        </button>
        <button>-</button>
      </span>
    </div>
  );
}
