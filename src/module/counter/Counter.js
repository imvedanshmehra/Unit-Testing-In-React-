import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    const incrementCounter = () => {
        setCount(count + 1)
    }

    const decrementCounter = () => {
        setCount(count -1)
    }

    return (
        <div data-test="counter">
           <h1>The count is <span data-test='counter-val'>{count}</span></h1> 
           <span>
               <button onClick={incrementCounter}>+</button>
               <button onClick={decrementCounter}>-</button>
           </span>
        </div>
    )
}
