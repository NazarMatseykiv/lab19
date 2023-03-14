import React from "react";
class Task1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        names: ['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро']
      };
    }
  
    render() {
      return (
        <ul>
          {this.state.names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      );
    }
  }
export default Task1;  