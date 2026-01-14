import React from 'react'
import Comp2 from './Comp2'
function Comp1({user}) {
  return (
    <>
    <h1>Comp1:{user}</h1>
    <Comp2 user={user}/>
    </>
    
  )
}

export default Comp1