import React, { Component } from "react";
class Task4 extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        names: [
          { id: 1, name: 'Коля' },
          { id: 2, name: 'Василь' },
          { id: 3, name: 'Петро' },
          { id: 4, name: 'Іван' },
          { id: 5, name: 'Дмитро' },
        ]
      };
    }
  
    handleRemoveName = (id) => {
      this.setState(prevState => ({
        names: prevState.names.filter(name => name.id !== id)
      }));
    }
  
    handleAddName = () => {
      const id = Math.floor(Math.random() * 10000);
      this.setState(prevState => ({
        names: [...prevState.names, { id, name: 'пункт' }]
      }));
    }
  
    render() {
      const { names } = this.state;
  
      return (
        <div>
          <ul>
            {names.map(name => (
              <li key={name.id}>
                {name.name}
                <button onClick={() => this.handleRemoveName(name.id)}>Видалити</button>
              </li>
            ))}
          </ul>
          <button onClick={this.handleAddName}>Додати пункт</button>
        </div>
      );
    }
  }
  
  export default Task4;