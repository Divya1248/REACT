import React, { Component } from 'react';
import Childcomponent from './childcomponent';
import userComponent from './userComponent';

class Parent extends Component {
    
    // state={
    //     employees:[
    //        { id:1,
    //        name:"divya",
    //        salary:5000,
    //        designation:"Developer",
    //        city:"Bangalore",
    //        experience:"2 years",
    //        education:"Btech",
    //        Skill:['Javascript','HTML','css','react']},
           
    //          {id:2,
    //    name:"vidya",
    //    salary:45000,
    //    designation:"Developer",
    //    city:"Bangalore",
    //    experience:"2 years",
    //    education:"Btech",
    //    Skill:['Javascript','HTML','css','react']},
    //    {id:2,
    //      name:"vidya",
    //      salary:45000,
    //      designation:"Developer",
    //      city:"Bangalore",
    //      experience:"2 years",
    //      education:"Btech",
    //      Skill:['Javascript','HTML','css','react']},
       
       
    //    ],

    //    LearnNewThings:{
    //        frontend:["html","css","js","react"],
    //        backend:["nodejs","expressjs","nextjs","nestjs","socketjs",],
    //        database:["mangodb","firebase"]
    //    }
    //    };
    state={
        username:"shashi",
        age:20,
        company:"testyantra",
        designation:"BE"
        
    };
       
       
    render() {
        return (
            <div>
                
                {/* <h1>I am Parent component</h1> */}
                 {/* <Childcomponent MERNStack="shashi sir"/> 
                 <Childcomponent salary={20000}/>
                 <Childcomponent skill={["javascript","nodejs","aws","docker"]}/>
                 {/* <Childcomponent obj={[salary:]}/> */}

                {/* <Childcomponent func={()=>{
                    console.log("hello")}}/>
                <Childcomponent math={Math.round(Math.random()*100)}/>
                 <Childcomponent date={new Date().toLocaleDateString()}/>
                 <Childcomponent und={undefined}/>
                 <Childcomponent nul={null}/>
                 <Childcomponent bigin={10n}/>  


       <Childcomponent obj={this.state}/> */}
       <userComponent state={this.state}/>

               
            </div>
        );
    }
}

export default Parent;
