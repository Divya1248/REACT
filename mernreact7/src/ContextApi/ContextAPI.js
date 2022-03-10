// import { createContext } from 'react'
// export let MyContext = createContext();

// // Create Provider
// let Provider = props => {
//     return (
//         <MyContext.Provider value={{emp_name:"shashi", emp_company:"Testyantra"}}>
//             {props.children}
//         </MyContext.Provider>
//     );
// };

// export default Provider;


//============== counter ===============================


import React, { createContext,useState } from "react";

export let MyContextCounter = createContext(0);

let MyCounterProvider= ({ children }) => {
    let [count, setCount] = useState(0);

    let Increement = () => {
        setCount(prev => prev + 1);
    }
    let Decreement = () => {
      setCount(prev => prev - 1);
    };
    let Reset = () => {
      setCount(0);
    };
    
    return (<div>
        <MyContextCounter.Provider value={{count, Increement,Decreement,Reset}}>
           {children} 
      </MyContextCounter.Provider>
  </div >
    )
  
};

export default MyCounterProvider;
