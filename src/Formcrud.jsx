import React, { useState } from 'react'
import axios from "axios"

const Formcrud=()=> {
    const [Data,setdata]=useState({});
    const handlechange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setdata(values=>({...values,[name]:value}))
    }

    const handlesubmit=(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:3000/mydata`,Data).then(()=>{
            alert('Data sent succfully..........')
        }).catch((err)=>{
            console.log(err);
        })
    }


  return (
    <div>
        <form onSubmit={handlesubmit}>
            Enter Rollno: <input type="text" name="rollno"  onChange={handlechange}/><br></br><br></br>
            Enter Name: <input type="text" name="name" onChange={handlechange} /><br></br><br></br>
            Enter Age: <input type="text" name="age" onChange={handlechange}/><br></br><br></br>
            Enter City: <input type="text" name="city" onChange={handlechange}/><br></br><br></br>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Formcrud