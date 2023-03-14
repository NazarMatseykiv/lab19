import React from "react";
class Task8 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fullName: ''
      };
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const fullName = event.target.value;
      const [lastName, firstName, middleName] = fullName.split(' ');
  
      this.setState({
        lastName: lastName || '',
        firstName: firstName || '',
        middleName: middleName || ''
      });
    }
  
    render() {
      return (
        <div>
          <input type="text" onChange={this.handleInputChange} />
          <p>{this.state.lastName}</p>
          <p>{this.state.firstName}</p>
          <p>{this.state.middleName}</p>
        </div>
      );
    }
  }
export default Task8;  