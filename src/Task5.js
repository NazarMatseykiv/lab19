import React, { Component } from 'react';

class Task5 extends Component {
  state = {
    inputValue: ''
  }

  handleInput = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
      <div>
        <input type="text" onInput={this.handleInput} />
        <p>{this.state.inputValue}</p>
      </div>
    );
  }
}

export default Task5;
