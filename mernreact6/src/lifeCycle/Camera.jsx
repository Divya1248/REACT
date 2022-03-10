// import React, { Component} from 'react';

// class Camera extends Component {
//     vedioref=  React.createRef();
//     async componentDidMount(){
//         let vedioLiveStream =await window.navigator.mediaDevices.getUserMedia({
//             vedio:{
//                 width:700,
//                 height:800,
//             },
//             audio:true,
//         });
//         let vedioBlock = this.vedioref.current;
//         vedioBlock.srcObject=vedioLiveStream;
//         vedioBlock.play();
//     }
//     render() {
//         return (
//             <div>
//                <video ref={this.vedioref}></video>
//             </div>
//         );
//     }
// }

// export default Camera;

import React, { Component } from "react";
import { createRef } from "react";

class Camera extends Component {
  videoRef = createRef();
  async componentDidMount() {
    let videoStream = await window.navigator.mediaDevices.getUserMedia({
      video: { width: "100%", height: "100%" },
      audio: true,
    });
    let videoBlock = this.videoRef.current;
    videoBlock.srcObject = videoStream;
    videoBlock.play();
  }
  render() {
    return (
      <div>
        <video ref={this.videoRef}></video>
      </div>
    );
  }
}

export default Camera;
