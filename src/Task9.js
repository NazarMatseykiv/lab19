import React, { Component } from 'react';

class Task9 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      displayText: '',
    };
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ displayText: this.state.text });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Text:
            <input type="text" value={this.state.text} onChange={this.handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.displayText}</p>
      </div>
    );
  }
}

export default Task9;
