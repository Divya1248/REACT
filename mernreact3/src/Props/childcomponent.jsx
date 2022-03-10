import React, { Component } from 'react';


class Childcomponent extends Component {
    render() {
        let {employees,LearnNewThings}=this.props.obj;
         console.log(this)
         console.log(employees);
         console.log(LearnNewThings);

         //---destructuring the individual array
let {frontend,backend,database}=LearnNewThings;
         console.log(frontend);
         console.log(backend);
         console.log(database);

         //---------MergeAll-------------
let CombineAll=[...frontend,...backend,...database];
        console.log(CombineAll);

        return (
            <div>
             <h1>I am child component</h1>
                {/* <h1>{this.props.MERNStack}</h1>  */}
               
            </div>
        );
    }
}

export default Childcomponent;
