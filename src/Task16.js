import React from "react";
class Task16 extends React.Component {
    state = {
      users: [
        { name: 'Коля', age: 30 },
        { name: 'Василь', age: 40 },
        { name: 'Петро', age: 50 },
      ],
      newName: '',
      newAge: '',
    };
  
    handleNameChange = (e) => {
      this.setState({ newName: e.target.value });
    };
  
    handleAgeChange = (e) => {
      this.setState({ newAge: e.target.value });
    };
  
    handleAddUser = () => {
      const { newName, newAge, users } = this.state;
      const newUser = { name: newName, age: newAge };
      this.setState({ users: [...users, newUser], newName: '', newAge: '' });
    };
  
    render() {
      const { users, newName, newAge } = this.state;
      return (
        <div>
          <table>
            <thead>
              <tr>
                <th>Ім'я</th>
                <th>Вік</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <input
              type="text"
              value={newName}
              onChange={this.handleNameChange}
              placeholder="Ім'я"
            />
            <input
              type="text"
              value={newAge}
              onChange={this.handleAgeChange}
              placeholder="Вік"
            />
            <button onClick={this.handleAddUser}>Додати</button>
          </div>
        </div>
      );
    }
  }
export default Task16;