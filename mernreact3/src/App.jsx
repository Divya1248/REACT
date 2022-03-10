import React, { Component } from 'react';

class App extends Component {
  state={
           
            employees:[
              { id:1,
              name:"divya",
              salary:5000,
              designation:"Developer",
              city:"Bangalore",
              experience:"2 years",
              education:"Btech",
              Skill:['Javascript','HTML','css','react']},
         {id:2,
          name:"vidya",
          salary:45000,
          designation:"Developer",
          city:"Bangalore",
          experience:"2 years",
          education:"Btech",
          Skill:['Javascript','HTML','css','react']},
          {id:2,
            name:"vidya",
            salary:45000,
            designation:"Developer",
            city:"Bangalore",
            experience:"2 years",
            education:"Btech",
            Skill:['Javascript','HTML','css','react']},
        
         
         ]
        }
      
    render() {
    let value=this.state.employees.map((e)=>{
        return <div>
           <p>{e.id}</p>
           <p>{e.name}</p>
           <p>{e.salary}</p>
           <p>{e.city}</p>
           <p>{e.experience}</p>
           <p>{e.education}</p>
        </div>
      })
        return (
          <div>
        <h1>hello</h1>
      {value}
        
        </div>
        );
    }
  }


export default App;
