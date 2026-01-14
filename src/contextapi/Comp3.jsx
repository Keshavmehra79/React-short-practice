import React, { useContext } from 'react'
import { myContext } from './App'


function Comp3() {
  const {user,setuser}=useContext(myContext);
  return (<>

  <h1>Comp3:{user}</h1>
  <button onClick={()=>{setuser("Naeem")}}>Click me</button>
  </>
  )
}

export default Comp3