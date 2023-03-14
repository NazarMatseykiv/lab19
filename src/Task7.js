import React from "react";
class Task7 extends React.Component {
    constructor(props) {
      super(props);
      this.state = { age: "" };
    }
  
    handleChange = (event) => {
      const age = event.target.value;
      const currentYear = new Date().getFullYear();
      const birthYear = currentYear - age;
      this.setState({ age: birthYear });
    };
  
    render() {
      return (
        <div>
          <input type="number" onChange={this.handleChange} />
          <p>Рік народження: {this.state.age}</p>
        </div>
      );
    }
  }
export default Task7;
  