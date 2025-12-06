import React from "react"
import { useState } from "react"

const Rendering=()=>{
    const [show,setshow]=useState(false);

    const Toggle=()=>{
        setshow(!show);
    }
   
    return(
        <>
    Enter password: <input type={show?"text":"password"}  />   <br></br><br></br> 
    <button onClick={Toggle}>{show? "Hide":"Show" }</button>
        </>


    )
}

export default Rendering