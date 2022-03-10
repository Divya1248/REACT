import React, { Component } from 'react';

class Life extends Component {
    constructor(){
        super();
        console.log("I am constructor");
        this.state= {count:0,};
        this.Increement = this.Increement.bind(this);
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps....here")
    }
    componentDidMount() {
        console.log("Component did mount here");
    }
    Increement=()=>{
        this.setState({count:this.state.count+1})
    }
    render() {
        console.log("I am render here...")
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.Increement}>Increement</button>
            </div>
        );
    }
}

export default Life;
