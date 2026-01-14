import React, { useMemo, useState } from 'react'

function Usememo2() {
    const [add,setadd]=useState(0);
    const[sub,setsub]=useState("");

    const myDisplay=useMemo(display,[]);

    function display(){
     for( var i=0;i<=1000000000;i++ ){};
     return add*2;
    }

  return (
    <>
    Enter num: <input value={add} type="text" onChange={(e)=>{setadd(e.target.value)}}/>
    <h1>Addition: {myDisplay}</h1>
    <button onClick={display}>Click me!</button>
    Enter City: <input value={sub} type="text" onChange={(e)=>{setsub(e.target.value)}}/>
    <h1>Subtraction: {sub}</h1>

    
    </>
  )
}

export default Usememo2