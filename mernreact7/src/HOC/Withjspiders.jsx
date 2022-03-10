import React, { useState } from 'react'

const Withjspiders = WrappedComponent => {
    return function Courses(){
        let [state,setstate] = useState({
            coursename:"MernStack",
            Trainer:"Shashi",
            duration:"5 months",
            languages:["html","css","javascript","react"]
        });
        return <WrappedComponent state={state}/>
    };
};

export default Withjspiders;
