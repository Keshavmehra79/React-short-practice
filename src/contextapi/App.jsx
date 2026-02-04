import React, { useState } from 'react'
import { createContext } from 'react'
export const myContext=createContext();
import Comp1 from './Comp1'
function App() {
    const[user,setuser]=useState('Naeem')
    const[sirname,setsirname]=useState('')

  return (<>
  <h1>This is App:{user}</h1>
  <button onClick={()=>{setsirname("Khan")}}>Click</button>
  <myContext.Provider value={{user,setsirname,sirname}}>

  <Comp1  />
  </myContext.Provider>
  </>
  )
}

export default App