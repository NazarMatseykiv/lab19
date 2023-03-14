import React, { useState } from 'react';

function Task13() {
  const [names, setNames] = useState(['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро']);
  const [newName, setNewName] = useState('');

  const addName = () => {
    setNames([...names, newName]);
    setNewName('');
  };

  const removeName = (index) => {
    const newNames = [...names];
    newNames.splice(index, 1);
    setNames(newNames);
  };

  return (
    <div>
      <ul>
        {names.map((name, index) => (
          <li key={index}>
            {name}
            <button onClick={() => removeName(index)}>Видалити</button>
          </li>
        ))}
      </ul>
      <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
      <button onClick={addName}>Додати</button>
    </div>
  );
}

export default Task13;
