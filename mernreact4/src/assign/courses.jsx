import React, { Component } from 'react';

class Courses extends Component {
    render() {
       let {coursename,trainer,duration,languages}=this.props.courses;

        return (
            <section>
               <article>
                   <div className="block">
                       <h2>Course name:{coursename}</h2>
                       <p>trainer:{trainer}</p>
                       <p>duration:{duration}</p>
                       <p>languages:{languages}</p>
                   </div>
                </article> 
            </section>
        );
    }
}

export default Courses;
