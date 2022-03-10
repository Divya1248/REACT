import React, { Component } from 'react';

class Count extends Component {
    state={
        count:0,
    }
    Increement=()=>{
        this.setState({count:this.state.count+1});
    }
    Decreement=()=>{
        this.setState({count:this.state.count-1});
    }
    Reset=()=>{
        this.setState({count:0});
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.Increement}>Increement</button>
                <button onClick={this.Decreement}>Decreement</button>
                <button onClick={this.Reset}>Reset</button>
            </div>
        );
    }
}

export default Count;

//function based 
// import React, { useState } from 'react'

// const Count = () => {
//     let [coun,setCount]=useState(0);
//     let Increement=()=>{
//         setCount(coun+1);
//     }
//     let Decreement=()=>{
//         setCount(coun-1);
//     }
//     let Reset=()=>{
//         setCount(0);
//     }
//     return (
//         <div>
//             <h1>{coun}</h1>
//             <button onClick={Increement}>Increement</button>
//             <button onClick={Decreement}>Decreement</button>
//             <button onClick={Reset}>Reset</button>
//         </div>
//     )
// }

// export default Count

