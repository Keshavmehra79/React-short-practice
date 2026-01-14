import React, { useMemo, useState } from 'react'

function Usememom() {
    const [num,setnum]=useState(0);
    const [city,setCity]=useState("");

    const myExpensive=useMemo(myFun,[num])

    function myFun(){
        for(var i=0;i<=1000000000;i++){}
        return num*2;
    }
  return (
    <>
    <h1>Wellcome to use memo hook </h1>
    Select number:<input type="number" value={num} onChange={(e)=>{setnum(e.target.value)}}/>
    Enter City :<input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
    <h1>Total Count:{myExpensive}</h1>
    
    </>
  )
}

export default Usememom