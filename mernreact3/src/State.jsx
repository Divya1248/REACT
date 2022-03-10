// import React, { Component } from 'react';

// class State extends Component {
//     state={
//         username:"Shashi",
//     };
//     changeName=()=>{
//         this.setState({username:"dixith"})
//     };
//     render() {
//         return (
//             <div>
//               <h1>{this.state.username}</h1> 
//               <button onClick={this.changeName}>Change shashi into dixith</button>
//             </div>
//         );
//     }
// }

// export default State;


//function based component
import React,{useState} from 'react'

const State = () => {
    let [name,setName]=useState("shashi");
    let changeName=()=>{
        setName("Dixith");
    }
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={changeName}>changename</button>
        </div>
    )
}

export default State
