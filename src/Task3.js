import React from 'react';

class Task3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро'],
    };
  }

  handleAddItem = () => {
    const newItem = 'пункт';
    this.setState(prevState => ({
      items: [...prevState.items, newItem],
    }));
  };

  handleRemoveItem = () => {
    this.setState(prevState => ({
      items: prevState.items.slice(0, -1),
    }));
  };

  render() {
    const { items } = this.state;

    return (
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={this.handleAddItem}>Додати пункт</button>
        <button onClick={this.handleRemoveItem}>Видалити пункт</button>
      </div>
    );
  }
}

export default Task3;
