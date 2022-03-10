import React, { Component } from 'react'

export default class Classref extends Component {
   constructor(){
   super();
   this.changecolor=React.createRef();
   }

   changetext=()=>{
    let self= this.changecolor.current.style;
    self.background="red";
    self.color="white";
    self.padding="10px";
   }
    render() {
        
        return (
            <div>
               <h1 ref={this.changecolor} onClick={this.changetext}>red</h1> 
            </div>
        )
    }
}
