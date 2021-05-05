import React from 'react';
import { useState } from 'react';

function App() {
  const [btnText, setBtnText] = useState('Btn');
  return (
    <div className="App">
      <input type="text" />
      <button onClick={() => setBtnText('Btn Clicked!!!')}>{btnText}</button>
    </div>
  );
}

export default App;
