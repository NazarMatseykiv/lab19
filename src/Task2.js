import React from "react";
class Task2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        names: ['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро']
      };
    }
  
    addListItem = () => {
      this.setState(prevState => ({
        names: [...prevState.names, 'пункт']
      }));
    }
  
    render() {
      return (
        <div>
          <ul>
            {this.state.names.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
          <button onClick={this.addListItem}>Додати пункт</button>
        </div>
      );
    }
  }
  export default Task2;  