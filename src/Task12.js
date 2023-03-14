import React, { useState } from 'react';

function Task12() {
  const [names, setNames] = useState(['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро']);
  const [newName, setNewName] = useState('');

  const addNameToList = () => {
    setNames([...names, newName]);
    setNewName('');
  };

  return (
    <div>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
      <button onClick={addNameToList}>Додати ім'я</button>
    </div>
  );
}
export default Task12;