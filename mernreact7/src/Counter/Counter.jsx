import React from 'react'
import { MyContextCounter } from '../ContextApi/ContextAPI';
import { useContext } from 'react';

const Counter = () => {
    let { count, Increement, Decreement, Reset} = useContext(MyContextCounter);
    return (
        <div>
            <h1>{count}</h1>
        <button onClick={Increement}>Increement</button>
        <button onClick={Decreement}>Decreement</button>
        <button onClick={Reset}>Reset</button>
      </div>
    );
}

export default Counter


