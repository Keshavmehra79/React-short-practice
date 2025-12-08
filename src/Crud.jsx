import React, { useEffect, useState } from 'react'
import axios from "axios"

const Crud=()=> {
const [Data,getdata]=useState([]);

useEffect(()=>{
    const mydata=()=>{
        axios.get("http://localhost:3000/mydata").then((res)=>{
                getdata(res.data)
        })
    }
    mydata();
},[])
  return (
    <div>
        <table>
            <thead>
                 <tr>
                <th>Rollno</th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
            </tr>
            </thead>
           
            <tbody>
                { Data.map((e)=>(
                    <tr>
                        <td>{e.rollno}</td>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                        <td>{e.city}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Crud