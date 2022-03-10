import React, { Component } from 'react';
import Parent from './Parent';

class Grandparent extends Component {
    render() {
        return (
            <div>
                <h1 style={{background:"red"}}>I am Grandparent</h1>
                <Parent username={"shashi"}/>
            </div>
        );
    }
}

export default Grandparent;
