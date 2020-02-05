import React, { Component } from 'react';
import UserForm from './UserForm';
import AllUser from './AllUser';

class App extends Component {
  render() {
      return (
        <div className="App">
          <div className="navbar">
            <h2 className="center ">User Management</h2>
            </div>
            <UserForm />
            <AllUser />
        </div>
      );
  }
}
export default App;