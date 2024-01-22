import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState<string>('defaultValue');
  return (
    <div className="App">
      <input 
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <div>{inputValue}</div>
    </div>
  );
}

export default App;