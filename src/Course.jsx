import React from 'react'
import { useParams } from 'react-router-dom'


const Course=()=> {
    const {courseid,coursename}=useParams()
  return (
    <div><h1>Course</h1>
    <h1>Your courseid is {courseid}</h1>
    <h1>Your courseid is {coursename}</h1>


    </div>
  )
}

export default Course



