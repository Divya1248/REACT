//example for uncontrolled component in react by using react refs
import React, { Component, createRef } from 'react'

export default class Uncontrolled extends Component {
    usernameref = createRef();
    passwordref = createRef();
    HandleSubmit(e){
        e.preventDefault();
        let user = this.usernameref.current.value;
        let pass = this.passwordref.current.value;
        console.log({user,pass});
    }
    render() {
        return (
            <form>
                <div><input type="text" placeholder="username" name="username" ref={this.usernameref}/></div>
                <div><input type="text" placeholder="password" name="password" ref={this.passwordref} /></div>
                <div><button onClick={this.HandleSubmit.bind(this)}>Submit</button></div>
            </form>
        )
    }
}
