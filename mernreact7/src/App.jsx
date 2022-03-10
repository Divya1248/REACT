import React, { Component } from 'react';
// import {BrowserRouter as Router , Route ,Routes} from "react-router-dom"
// import Btm from './Branch/Btm';
// import  MyCounterProvider, { MyContextCounter } from './ContextApi/ContextAPI';
import ReducerProvider from './ContextApi/ReducerContext';
// import Counter from './Counter/Counter';
import UseReducerCounter from './Counter/UseReducerCounter';
// import Home from './Component/Home';
// import Login from './Component/Login';
// import Register from './Component/Register';
// import About from './Component/About';
// import Contact from './Component/Contact';
// import Navbar from './Pages/Navbar';
// import Withjspiders from './HOC/Withjspiders';
// import Btr from './Branch/Btr';


// import Provider from './ContextApi/ContextAPI';
// import WithCars from './HOC/WithCars';
// import Bangalore from './Showroom/Bangalore';


class App extends Component {
    render() {
        return (
          // <section>
          //     <article>
          //         <Router>
          //             <Navbar/>
          //             <Routes>
          //           <Route path="/" element={<Home/>}/>
          //           <Route path="/login" element={<Login/>}/>
          //           <Route path="/register" element={<Register/>}/>
          //           <Route path="/About" element={<About/>}/>
          //           <Route path="/contact" element={<Contact/>}/>
          //           </Routes>
          //         </Router>
          //     </article>
          // </section>
            


            
          <div>
            {/* <Withjspiders/>
                <Btr/>
                */}
            {/* <WithCars />
                <Bangalore/> */}

            {/* context API 1st method */}
            {/* <Provider>
                   <Btm/>
            </Provider> */}
            {/* context API 2nd method */}
            {/* <Provider>
                   <Btm/>
            </Provider> */}
                
                {/* counter */}
             {/* <MyCounterProvider>
                   <Counter/>
                   </MyCounterProvider> */}
                   
                <ReducerProvider>
                    <UseReducerCounter/>
                </ReducerProvider>
               
          </div>
        );
    }
}

export default App;
