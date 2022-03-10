// import React,{useState,useEffect} from 'react'

// const Hook = () => {
//     let [count, setcount] = useState(1);
//     useEffect(() => {
//         document.title = count;
//         console.log("DOM Rendered", count , "times");
// function Cleanup() {
//            console.log("clean up component") 
// }
// Cleanup();

//     },[count])
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={()=> setcount(count +1)}>Submit {count}</button>
//         </div>
//     )
// }

// export default Hook;


// class based component
import React, { Component } from 'react';

class Hook extends Component {
  state = {
    count: 1,
  };
  componentDidMount() {
    document.title = this.state.count;
    console.log(this.state.count + " " + "Rendered times");
    console.log("COMPONENT DID MOUNT");
  }

  componentDidUpdate() {
    document.title = this.state.count;
    console.log(this.state.count + " " + "Rendered times");
    console.log("COMPONENT DID UPDATE");
    }
    
    componentWillUnmount() {
        document.title = "no data";
        console.log("COMPONENT WILL UNMOUNT")
    }

  render() {
      return <div>
          {this.state.count}
          <button onClick={() => this.setState({ count:this.state.count + 1 })}>Submit {this.state.count}</button>
    </div>;
  }
}

export default Hook;
