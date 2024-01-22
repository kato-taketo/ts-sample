import React, { useEffect, useState} from 'react';
import { Component} from './Component';

function App() {
  const [inputValue, setInputValue] = useState<string>('defaultValue');

  return (
    <div className="App">
      <input
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }
        }
      />
      <Component inputValue={inputValue} />
    </div>
  );
}

export default App;