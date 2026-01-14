import React, { useMemo, useState } from 'react'

function Trial() {
    const [add,setAdd]=useState(0);
    const [sub,setSub]=useState(100);
   const mydata= useMemo(display,[add]);
   function display(){
    console.log("*****");
    return add*2;
   }
   
   
  return (<>
        <button onClick={()=>{setAdd(add+1)}}>Add</button>
        <h1>Increment: {add}</h1>
        <button onClick={()=>{setSub(sub-1)}}>Sub</button>
        <h1>Decrement : {sub}</h1>
        <h1>My Data : {mydata}</h1>
  </>
  )
}

export default Trial