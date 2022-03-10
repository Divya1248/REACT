import React, { useState } from 'react'

const WithCars = Wrap => {
    return function Cars(){
       let [state, setstate] = useState(
          [{
             carname: "Maruthi",
             color: "red",
             Mailage: 100,
          },
          {
             carname: "Ferari",
             color: "blue",
             Mailage: 400,
          },
          {
             carname: "Swift",
             color: "white",
             Mailage: 600,
          },
          ]
       );
      
       return <Wrap state={state}/>
   };

   
   
}

export default WithCars
