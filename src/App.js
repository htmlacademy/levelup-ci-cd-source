import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1); /* Внимание! строка содержащая ошибки */
  };

  return (
    <div>
      <h1>
        Счетчик:
        {count}
      </h1>
      <button type="button" onClick={handleButtonClick}>Увеличить счетчик</button>
    </div>
  );
}

export default App;
