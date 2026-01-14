import React from 'react'
import Comp3 from './Comp3'
function Comp2({user}) {
  return (
    <>
    <h1>Comp2:{user}</h1>
    <Comp3 user={user}/>
    
    </>

  )
}

export default Comp2