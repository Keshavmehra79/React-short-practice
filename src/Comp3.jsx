import React, { useContext } from 'react'
import { myContext } from './App2'

function Comp3() {
    const {user,setUser}=useContext(myContext)
  return (
      <div>Comp3: {user}
    <button onClick={()=>{setUser('Naim')}}>Click</button>
    </div>
  )
}

export default Comp3