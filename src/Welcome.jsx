import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const Welcome=()=> {
    const nav=useNavigate();

    const {name}=useParams();
  return (
    <div>
    <h1>Wellcome!{name}</h1>
    <button onClick={()=>nav(-1)}>Go back</button>
    </div>
  )
}

export default Welcome