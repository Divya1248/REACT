// import React, { Component } from 'react'

//  class Controlled extends Component {
//      state={
//          username:"",
//          password:""
//      }
//      HandleChange= e=>{
//          let {name,value}= e.target;
//          this.setState({[name]:value});
//      };
//      HandleSubmit = e=>{
//          e.preventDefault();
//          let{username,password}=this.state;
//          console.log({username,password});
//      }
//     render() {
//         return (
//             <div>
//                  <form onSubmit={this.HandleSubmit}>
//                 <div>
//                     <input type="text" placeholder="username" name="username" 
//                 value={this.state.username}
//                 onChange={this.HandleChange}/>
//                 </div>
//                 <div>
//                     <input type="text" placeholder="password" name="password" 
//                 value={this.state.password}
//                 onChange={this.HandleChange}
//                  />
//                 </div>
//                 <div><button>Submit</button></div>
//             </form> 
//             </div>
//         )
//     }
// }
// export default Controlled;

import React from 'react'
import { useState } from 'react/cjs/react.development'

const Controlled = () => {
    let [state,setstate]=useState({
        username:"",
        password:"",
    })
    let {username,password}=state;
    let HandleChange=e=>{
        let {name,value}=e.target;
        setstate({...state,[name]:value})
    }
    let HandleSubmit=e=>{
        e.preventDefault();
        console.log({username,password})
    }
    return (
        <div>
                   <form onSubmit={HandleSubmit}>
                 <div>
 <input type="text" placeholder="username" name="username" 
                        value={username}
                        onChange={HandleChange}/>
                        </div>
                        <div>
                            <input type="text" placeholder="password" name="password" 
                        value={password}
                        onChange={HandleChange}
                         />
                        </div>
                        <div><button>Submit</button></div>
                    </form> 
                    </div>
     
    )
}

export default Controlled

