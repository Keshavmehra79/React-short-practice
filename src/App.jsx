import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Cartdata from './Pages/Cartdata'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home/>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/cartdata' element={<Cartdata />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
