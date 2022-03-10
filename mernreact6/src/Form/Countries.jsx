import React from 'react'
import { Fragment, useState } from 'react/cjs/react.development'
import JSON from "../Countries.json"
const Countries = () => {
    let [country,setcountry]=useState(JSON);
    let [state,setstate]=useState(null)
    let HandleChange= e =>{
        let {name,value}=e.target;
       setstate({[name]:value})
 };
 
 let HandleSubmit = e =>{
     e.preventDefault();
     console.log(state);
 }

    return (
        <div>
            <form onSubmit={HandleSubmit}>
                  <select name="country" value={state} onChange={HandleChange}>
                  {country.map(e => (
                   <Fragment key={e.code}> <option >{e.state}</option>
                   
                   </Fragment>
                

                  ))}  
              </select>
              <button>Submit</button>
            
            </form>
        </div>
    )
    
}

export default Countries
