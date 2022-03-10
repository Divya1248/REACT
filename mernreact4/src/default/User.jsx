import React, { Component } from 'react'

 class User extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.user}</h2>
            </div>
        )
    }
}

//setting default props in functioal based component
User.defaultProps={
    user:"kumar",
};
export default User;

 

