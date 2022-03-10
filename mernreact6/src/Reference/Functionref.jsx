import React, { useRef } from 'react'

const Functionref = () => {
    let changeblue=useRef();
    let changecolor=()=>{
        changeblue.current.style.background = "blue";
        changeblue.current.style.color = "#fff";
        changeblue.current.style.padding = "10px";
        changeblue.current.style.margin = "10px";

    }
    return (
        <div>
            <h1 onClick={changecolor} ref={changeblue}>blue</h1>
        </div>
    )
}

export default Functionref
