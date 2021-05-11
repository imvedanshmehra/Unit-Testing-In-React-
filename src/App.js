import React from 'react';
import Button from './components/Button/Button';
import Search from './components/Search/Search';
import Counter from './module/counter/Counter';

function App() {
  return (
    <div className="App">
      <Search />
      <Button />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
