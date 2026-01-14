import React, { useState } from 'react'
import Comp1 from './Comp1'
import { createContext } from 'react'
const myContext=createContext();
function App2() {
const [user,setUser]=useState("keshav");
  return (<>
  <h1>Welcome to web:{user}</h1>
  <button onClick={()=>{setUser("Mehra")}}>Click!</button>
  <myContext.Provider value={{user,setUser}}>

    <Comp1/>
  </myContext.Provider>
  </>
    
  )
}

export default App2
export {myContext};