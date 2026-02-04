import React, { useContext } from 'react'
import { myContext } from './App'


function Comp3() {
  const values=useContext(myContext);
  return (<>

  <h1>Comp3:{values.user}</h1>
  <h1>Sirname:{values.sirname}</h1>
  <button onClick={()=>{values.setsirname("pandit")}}>Click me</button>
  </>
  )
}

export default Comp3