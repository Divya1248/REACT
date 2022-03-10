// import React, { Component } from 'react';
// import { GalleryContextApi } from './ContextApi/Gallery';
// import GalleryComponent from './ContextApi/GalleryComponent';
// class App extends Component {
//     render() {
//         let data = this.context;
//         console.log(data)
//         return (
//             <div>
//                 <h1>hello</h1>
//                 <GalleryComponent/>

//             </div>
//         );
//     }
// }

// export default App;
// App.contextType = GalleryContextApi;

import React, { Component } from 'react';
import GalleryComponent from './ContextApi/GalleryComponent';

class App extends Component {
    render() {
        return (
            <section id="mainblock">
                <article>
                       <GalleryComponent/>
                </article>
             
            </section>
        );
    }
}

export default App;


