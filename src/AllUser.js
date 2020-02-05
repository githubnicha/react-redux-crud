import React, { Component } from 'react';
import { connect } from 'react-redux';

import User from './User';

import EditComponent from './EditComponent';

class AllUser extends Component {
  render() {
      return (
        <div>
            <h1 className="user_heading">All Users</h1>
            {this.props.users.map((user) => (
               <div key={user.id}>
                    {user.editing ? <EditComponent user={user} key={user.id} /> :
                        <User key={user.id} user={user} />}
               </div>
            ))}
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
      users: state
  }
}
export default connect(mapStateToProps)(AllUser);