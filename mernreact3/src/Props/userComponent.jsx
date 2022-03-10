import React from 'react'

const userComponent = (props) => {
    let {username, age, company, designation, salary}=props.state;
    console.log(username);
    console.log(age);
    return (
        <div>
           <h1>user list</h1> 
        </div>
    )
}

export default userComponent;
