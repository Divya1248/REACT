import React from 'react'
import Withjspiders from '../HOC/Withjspiders'
const Btr = (props) => {
    return (
        <div>
            <h1 style={{background:"red"}}>BTR Branch </h1>
            <h1>{props.state.Trainer}</h1>
         </div>   
    )
}

export default Withjspiders(Btr);
