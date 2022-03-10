import React from 'react'
import Child from './Child'
const Parent = (props) => {
    console.log(props)
    return (
        <div>
            <h1 style={{background:"yellow"}}>I am Parent{props.username}</h1>
            <Child username={props.username}/>
        </div>
    )
}

export default Parent
