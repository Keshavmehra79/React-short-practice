import React, { useState } from 'react'
import { createContext } from 'react'
export const myContext=createContext();
import Comp1 from './Comp1'
function App() {
    const[user,setuser]=useState('Arjun')
  return (<>
  <h1>This is App:{user}</h1>
  <myContext.Provider value={{user,setuser}}>

  <Comp1  />
  </myContext.Provider>
  </>
  )
}

export default App