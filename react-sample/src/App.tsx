import React, { useEffect, useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState<string>('defaultValue');
  const [response, setResponse] = useState<Response | null> (null);

  useEffect(
    () => {
      const controller = new AbortController();
      fetch('api/data/list', {
        body: JSON.stringify({ inputValue }),
        signal: controller.signal
      }).then((response) => {
        setResponse(response);
      });
      return () => {
        controller.abort();
      };
    },
    [inputValue]
  );

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