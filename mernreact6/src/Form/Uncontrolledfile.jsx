import React, { useRef } from 'react';

const HandlingFiles = () => {
 let filehandleRef= useRef();
 let handleSubmit= (e) =>{
 e.preventDefault();
 let files = filehandleRef.current.files[0]
 console.log(files);
 }

 return (
 <form>
 
 <div>
 <input type="file"
 name="uploadfile"
 ref={filehandleRef} />

 <button onClick={handleSubmit}>Submit</button>
 </div>

 </form>
 );
 }


export default HandlingFiles;
