// import React, { useRef, useState } from 'react'

// const Vedioplayer = () => {
//     let [vedio,setvedio]=useState(null);
//     let vedioref= useRef();
//     let PlayOrPause = () =>{
//      vedioref.current.play();
//          vedioref.current.style.width="100%";
//          vedioref.current.style.height="100vh";

//     }

   
//     return (
//         <div>
//             <video src="Vedio1.m4v" ref={vedioref} height={200} width={200} 
//             onClick={PlayOrPause} >
//             </video>
//             <button></button>
//         </div>
//     )
// }

// export default Vedioplayer


//if else condition
import React, { useRef, useState } from 'react'
import "./Vedio.css"
const Vedioplayer = () => {
    let [play,setplay]=useState(true);
    let [mute,setmute]=useState(true)
    let vedioref = useRef();
    let MakePlayOrPause = ()=>{
        setplay(!play);
        // if(play===true){
        //     vedioref.current.play();
        //     vedioref.current.muted= true;
        // }
        // else{
        //     vedioref.current.pause();
        //     vedioref.current.muted= false;
        // }
       
        //conditional rendering
         play?vedioref.current.play():vedioref.current.pause();
    } ;
    let Mutemode=()=>{
        setmute(!mute);
        mute? (vedioref.current.muted=true):(vedioref.current.muted=false);
    }
    
    return (
        <div>
            <video src="Vedio1.m4v" ref={vedioref}> </video>
            <span className="vedioblock">
                <button onClick={MakePlayOrPause}>
                    {play===true? "Play" :"pause"}
                </button>
                </span>
                <span>{mute? (<i class="fas fa-volume" onClick={Mutemode}></i>):(<i class="fas fa-volume-slash" onClick={Mutemode}></i>)}</span>
            
            
        </div>
    )
}

export default Vedioplayer
