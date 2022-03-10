import React, { Component } from 'react'
import ChildBasedComponent from './ChildBasedComponent';
import User from './User';

 class App extends Component {
    state={
        user:"shashi"
    }
    render() {
        return (
            <div>
               <User user="shashi"/>
               <ChildBasedComponent user={100}/>

            </div>
        )
    }
}
export default App;




