// import React, { useState } from 'react'

// const Random = () => {
//     let [values,setName]=useState(0);
//     let Randomnum=()=>{
//         setName(Math.round(Math.random()*100))
//     }
//     return (
//         <div>
//            <h1>{values}</h1> 
//            <button onClick={Randomnum}>click</button>
//         </div>
//     )
// }

// export default Random

import React, { Component } from 'react';

class Random extends Component {
    state={
        value:0,
    }
    Randomnum=()=>{
        this.setState({value:(Math.round(Math.random()*100))});
    }
    render() {
        return (
            <div>
                <h1>{this.state.value}</h1>
                <button onClick={this.Randomnum}>click</button>
            </div>
        );
    }
}

export default Random;

