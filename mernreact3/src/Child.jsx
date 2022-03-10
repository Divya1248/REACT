import React from 'react'

const Child = (props) => {
    console.log(props)
    return (
        <div>
           <h1 style={{background:"blue"}}>I am Child{props.username}</h1> 
           
        </div>
    )
}

export default Child
