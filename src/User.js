import React, { Component } from 'react';
import { connect } from 'react-redux';

class User extends Component 
{
    render() {
        return (
            <div className="user">
                <h2 className="user_title">{this.props.user.firstname}</h2>
                <p className="user_message">{this.props.user.lastname}</p>
                <div className="control-buttons">
                    <button className="edit" 
                        onClick={()=>this.props.dispatch({type: 'EDIT_USER', id: this.props.user.id})}>Edit</button>
                    <button className="delete"
                        onClick={()=>this.props.dispatch({type: 'DELETE_USER', id: this.props.user.id})}>Delete</button>
                </div>
            </div>
        ); 
    }
}

export default connect()(User);