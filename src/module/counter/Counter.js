import React, { useState } from 'react';

export default function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div data-test="counter">
           <h1>The count is <span data-test='counter-val'>{count}</span></h1> 
        </div>
    )
}