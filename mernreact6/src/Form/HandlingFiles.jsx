import React from 'react'
import { useState } from 'react/cjs/react.development'

const HandlingFiles = () => {
    let [state,setstate]=useState({
        uploadFile:"",
    });
    let {name,lastModifiedDate} = state;

    let handleFileChange = e=>{
        setstate(e.target.files[0]);
       
        
    };

    let HandleSubmit = e =>{
        e.preventDefault();
        console.log(name);
        console.log(lastModifiedDate);
    };

    return (
        <div>
            <form >
                 
     <input type="File" onChange={handleFileChange}/>  
     <button onClick={HandleSubmit}>Submit</button>             
         </form> 
            
        </div>
    )
}

export default HandlingFiles
