import React,{useState,useRef} from 'react'
// import "./MultipleVideos.css"
const MultipleVideo = (props) => {
let[video,setVideo]=useState(true)
let videoRef=useRef();
let PlayorPause=()=>{
setVideo(!video)
if (video) {
videoRef.current.play();
videoRef.current.style.width="700px";
videoRef.current.style.height="590px";
}else{
videoRef.current.pause()
videoRef.current.style.width="300px";
videoRef.current.style.height="300px";
}

};




return (
<div>
<video src={props.send} onClick={PlayorPause} ref={videoRef}></video>

</div>
)
}

export default MultipleVideo
