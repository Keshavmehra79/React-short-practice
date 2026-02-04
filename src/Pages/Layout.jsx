import React from 'react'
import { Link,Outlet } from 'react-router-dom'
function Layout() {
  return (<>
  <Link to="home">Home</Link>
  <Link to="cart">My cart</Link>
  <Link to="cartdata">Cartdata</Link>
  <Outlet/>     
  <hr/>
  www.mycart.com
  <hr/>
  
  </>
  )
}

export default Layout