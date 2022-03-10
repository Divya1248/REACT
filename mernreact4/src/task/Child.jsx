// import React, { Component } from 'react'
// import Courses from './../assign/courses';

//  class Child extends Component {
    

   
   
//     render() {
//         // let {course,coursename,trainer,duration,languages}=(this.props.user);
//         return (
            
//             <table>

//             <tr>
//                 <th>{course}</th>
//             <td>{coursename}</td>
//             <td>{trainer}</td>
//             <td>{duration}</td>
//             <td>{languages}</td>
//             </tr>
//             </table>

            
//         )
//     }
//     }

// export default Child


import React, { Component } from 'react'


export default class child extends Component {
    render() {
        return (
           
<table>
    <tr className="color">
        <th>Courses</th>
        <th>Trainer</th>
        <th>duration</th>
        <th>languages</th>

    </tr>
    
        {this.props.user.map((e)=><tr className="star">
         <td>{e.coursename}</td>
         <td>{e.trainer}</td>
         <td>{e.duration}</td>
         <td>{e.languages}</td>
         </tr>
        )}

        
       
    
</table>



        
           
                
        )
    }
}
