import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Layout from './.pages/Layout'
import Home from './Home'
import About from './.pages/About'
import Service from './.pages/Service'
import Contact from './.pages/Contact'

const Routing=()=> {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="*" element={<h1>oops!Something went wrong</h1>}/>

        
        </Route>

    </Routes>
  )
}

export default Routing