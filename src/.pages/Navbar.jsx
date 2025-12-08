import React from 'react'
import { Link } from 'react-router-dom'

const Navbar=()=> {
  return (
    <div>
        <nav>
           <Link to="/home">Home</Link>
           <Link to="/About">About</Link>
           <Link to="/service">Service</Link>
           <Link to="/contact">Contact</Link>
        </nav>

    </div>
  )
}

export default Navbar