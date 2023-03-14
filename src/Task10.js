import React, { useState } from 'react';

function Task10() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [sum, setSum] = useState('');

  const handleAddition = () => {
    const result = Number(number1) + Number(number2);
    setSum(result);
  };

  return (
    <div>
      <div>
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
        />
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        />
        <button onClick={handleAddition}>Додати</button>
      </div>
      <p>Сума: {sum}</p>
    </div>
  );
}

export default Task10;
