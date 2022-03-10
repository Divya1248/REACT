import React from 'react'
import { useState } from 'react/cjs/react.development';

const Radio = () => {
    let [state,setstate]=useState(null)
    let handlechange= e =>{
        let {name,value}=e.target;
        setstate({[name]:value})
    }
    let handlesubmit = e=>{
        e.preventDefault();
        console.log(state)
    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
                <div onChange={handlechange} name={state}>
                    <input type="radio" value="male" name="gender"/>Male
                    <input type="radio" value="Female" name="gender"/>Female
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Radio
