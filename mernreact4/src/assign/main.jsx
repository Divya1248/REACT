import React, { Component } from 'react';
import Courses from './courses';
class Main extends Component {
    render() {
        return (
            <div>
            
                <Courses
                courses={{
                    coursename:"mernstack",
                    trainer:"shahsi",
                    duration:"5months",
                    languages:["javascript"],

                }}/>
                 <Courses
                courses={{
                    coursename:"javafullstack",
                    trainer:"manu",
                    duration:"5months",
                    languages:["java","javascript","sql"],

                }}/>
                 <Courses
                courses={{
                    coursename:"pythonfullstack",
                    trainer:"shahsi",
                    duration:"5months",
                    languages:["javascript"],

                }}/>
            </div>
        );
    }
}

export default Main;
