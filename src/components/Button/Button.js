import React, { useState } from 'react';

const Button = () => {
  const [value, setValue] = useState('Click Me');
  return (
    <button onClick={() => setValue('You Clicked')} title="testBtn">
      {value}
    </button>
  );
};

export default Button;
