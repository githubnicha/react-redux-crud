import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditComponent extends Component 
{
    handleEdit = (e) => {
        e.preventDefault();
        const newFirstname = this.getFirstname.value;
        const newLastname = this.getLastname.value;
        const data = {
            newFirstname,
            newLastname
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.user.id, data: data })
    }
    
    render() {
        return (
            <div className="user">
                <form onSubmit={this.handleEdit} className="form">
                    <input required type="text" ref={(input)=>this.getFirstname = input} 
                    placeholder="Enter first name" defaultValue={this.props.user.firstname}/>
                    <br /><br />
                    <input required type="text" ref={(input)=>this.getLastname = input} 
                    placeholder="Enter last name" defaultValue={this.props.user.lastname}/>
                    <br /><br />
                    <button>Update</button>
                </form>
            </div>
        ); 
    }
}

export default connect()(EditComponent);