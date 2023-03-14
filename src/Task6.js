import React from "react";
class Task6 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: ''
      };
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const text = event.target.value.toUpperCase();
      this.setState({ text });
    }
  
    render() {
      return (
        <div>
          <input type="text" onChange={this.handleInputChange} />
          <p>{this.state.text}</p>
        </div>
      );
    }
  }
export default Task6;