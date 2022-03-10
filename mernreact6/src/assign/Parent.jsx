import React from 'react'
import { useState ,useRef} from 'react'

const Parent = () => {
    let[play, setplay]=useState(["vedio1.m4v",
    "vedio1.m4v",
    "vedio1.m4v"])
    let vedioref= useRef();
        let PlayOrPause = () =>{
         vedioref.current.play();
             vedioref.current.style.width="100%";
             vedioref.current.style.height="100vh";
    
        }
    
       
        return (
            
               (play.map((e)=>(
                    <div> 
                 <video src={e[0]} ref={vedioref}> </video>
            <span className="vedioblock">
                <button onClick={PlayOrPause}>
                    {play===true? "Play" :"pause"}
                </button>
                </span>
             </div>  
                
           
        )))
                
                
                
        )

                }
export default Parent

  
