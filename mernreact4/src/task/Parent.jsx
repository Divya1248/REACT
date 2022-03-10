import React, { Component } from 'react'
import Child from './Child';
import "./styling.css"

 class Parent extends Component {
     state={
        
    //    Jspider: [{
    //     coursename:"courses",
    //     trainer:"trainer",
    //     duration:"duration",
    //     languages:"languages",

    // },
    
           
        
        
    Jspider: [{
            coursename:"mernstack",
            trainer:"shahsi",
            duration:"5months",
            languages:["javascript"],

        },
        
    {
            coursename:"javafullstack",
            trainer:"manu",
            duration:"5months",
            languages:[" java, "," javascript, "," sql "],

         },
       
        {
            
            coursename:"pythonfullstack",
            trainer:"shahsi",
            duration:"5months",
           languages:["javascript"],

        },
    ]
}
    render() {

        return (
            <div>

                {/* <Child user={this.state.Jspider[0]}/>
                <Child user={this.state.Jspider[1]}/> 
                <Child user={this.state.Jspider[2]}/> 
                {/* <Child user={this.state.Jspider[3]}/>  
                // 
                 */} 
                 <Child user={this.state.Jspider}/>
            </div>
        )
    }
}
export default Parent;