import React from 'react'
import MultipleVideo from './MutlipleVedio';


const MultipleVideoParent = () => {
let Videos={
src:[
"Vedio1.m4v","Vedio1.m4v","Vedio1.m4v"]
}
return(
<div>
{
Videos.src.map(send=>{
return<MultipleVideo send={send}/>
})
}
</div>
)
}
export default MultipleVideoParent