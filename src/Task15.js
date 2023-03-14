import React, { useState } from 'react';

function Task15() {
  const [list, setList] = useState(['Apple', 'Banana', 'Cherry']);
  const [inputValue, setInputValue] = useState('');

  const handleDelete = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const handleButtonClick = () => {
    const indexToDelete = parseInt(inputValue) - 1;
    handleDelete(indexToDelete);
    setInputValue('');
  };

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleButtonClick}>Delete item</button>
    </div>
  );
}

export default Task15;
