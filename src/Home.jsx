import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home=()=>{
const nav=useNavigate();

const [name,setname]=useState("");

const usenav=()=>{
    
    nav(`/profile/${"keshav"}`)
}

const sendpara=()=>{
    nav(`/course/${"101"}/${"React"}`)
}



const handlesubmit=(e)=>{
    e.preventDefault;
    nav(`/Welcome/${name}`)
}
    return(
        <>
        <h1>This is home page.......</h1>
        <button onClick={usenav}>Go to profile</button><br></br><br></br>

        <form action={handlesubmit}>
           Enter Username: <input type="text" onChange={(e)=>(setname(e.target.value))}/><br></br>
           <input type="submit" />
        </form>
        <button onClick={sendpara}>Go to Course</button>
        </>
    )
}

export default Home