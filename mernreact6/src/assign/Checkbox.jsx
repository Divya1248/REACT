import React from 'react'
import { useState } from 'react'
const Checkbox = () => {
    let [state,setstate]=useState([])
 
    let handlechange= e =>{
        let {name,value}=e.target;
        setstate({...state,[name]:value})
    }
    
    let handlesubmit = e=>{
        e.preventDefault();
        console.log(state)
       
    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
                <div  onChange={handlechange} name={state} >
                    <input type="checkbox" value="JS" name="skills1"/>JS
                    <input type="checkbox" value="HTML" name="skills2"/>HTML
                    <input type="checkbox" value="CSS" name="skills3"/>CSS
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Checkbox
