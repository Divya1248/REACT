// import React from 'react'
// import Provider, { MyContext } from '../ContextApi/ContextAPI';
// // import Withjspiders from '../HOC/Withjspiders';
// const Btm = (props) => {
//     return (
//       <div>
//         

//         {/* context API 1st*/}
//         <h1>Hello</h1>
            // <MyContext.Consumer>
            //     {value =>(
            //         <React.Fragment>
            //             <h1> {value.emp_name}</h1>
            //         </React.Fragment >)}
            // </MyContext.Consumer >

//       </div>
//     );
// }

// // export default Withjspiders(Btm);
// export default Btm;

// 2nd method to consume by using contexttype only works in class based
// import React, { Component } from 'react';
// import { MyContext } from '../ContextApi/ContextAPI';


// class Btm extends Component {
//     render() {
//         let { emp_name, emp_company } = this.context;
//         return (
//             <div>
//                 <h1>{emp_name}</h1>
//                 <h1>{emp_company}</h1>
//             </div>
//         );
//     }
// }

// export default Btm;
// Btm.contextType = MyContext;


//3rd way of consuming using functional based using usecontext

import React from 'react'
import { useContext } from 'react';
import { MyContext } from '../ContextApi/ContextAPI';


const Btm = () => {
    let {emp_name, emp_company } = useContext(MyContext);
    return (
      <div>
        <h1>{emp_name}</h1>
        <h1>{emp_company}</h1>
      </div>
    );
}

export default Btm;