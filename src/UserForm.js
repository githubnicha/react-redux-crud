import React, { Component } from 'react';
import {connect} from 'react-redux';

class UserForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const firstname = this.getFirstname.value;
    const lastname =  this.getLastname.value;
    const data = {
      id: new Date(),
      firstname,
      lastname,
      editing: false
    }
    console.log(data)
    this.props.dispatch({
      type:'ADD_USER',
      data});
    this.getFirstname.value = '';
    this.getLastname.value = '';
  }
  render() {
      return (
        <div className="user-container">
          <h1 className="user_heading">Create User</h1>
          <form className="form" onSubmit={this.handleSubmit}>
            <input required type="text" ref={(input)=>this.getFirstname = input} 
              placeholder="Enter first name"/>
            <br /><br />
            <input required type="text" ref={(input)=>this.getLastname = input} 
              placeholder="Enter last name"/>
            <br /><br />
            <button>Create User</button>
          </form>
        </div>
      );
  }
  }
export default connect()(UserForm);