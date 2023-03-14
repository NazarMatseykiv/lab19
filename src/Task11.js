import React, { Component } from 'react';

class Task11 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      middleName: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleButtonClick = () => {
    const { firstName, lastName, middleName } = this.state;
    const fullName = `${lastName} ${firstName} ${middleName}`;
    this.setState({ fullName });
  }

  render() {
    const { firstName, lastName, middleName, fullName } = this.state;
    return (
      <div>
        <input type="text" name="firstName" value={firstName} onChange={this.handleInputChange} />
        <input type="text" name="lastName" value={lastName} onChange={this.handleInputChange} />
        <input type="text" name="middleName" value={middleName} onChange={this.handleInputChange} />
        <button onClick={this.handleButtonClick}>Show full name</button>
        {fullName && <p>Full name: {fullName}</p>}
      </div>
    );
  }
}

export default Task11;
