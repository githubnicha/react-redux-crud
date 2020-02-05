const postReducer = (state = [], action) => {
    switch(action.type) {
      case 'ADD_USER':
        return state.concat([action.data]);
      case 'DELETE_USER':
        return state.filter((user) => user.id !== action.id);  
      case 'EDIT_USER':
        return state.map((user)=>user.id === action.id ? {...user, editing:!user.editing}:user);
      case 'UPDATE':
        return state.map((user)=> {
            if(user.id === action.id) {
                return {
                    ...user,
                    firstname: action.data.newFirstname,
                    lastname: action.data.newLastname,
                    editing: !user.editing
                }
            } else return user; 
        })          
      default:
        return state;
    }
  }
  export default postReducer;