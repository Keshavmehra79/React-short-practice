import React, { useEffect, useState } from 'react'
import axios from "axios"

const Crud2 = () => {
  const [mydata, setmydata] = useState([]);
  const fetchdata = () => {
    axios.get("http://localhost:3000/studata").then((res) => {
      setmydata(res.data);
      console.log(res.data)
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    fetchdata();
  }, [])




  const [Data, setdata] = useState({});

  const handlechange = (e) => {
    let name = e.target.name;
    let value = e.target.value
    setdata(values => ({ ...values, [name]: value }))
  }

  const senddata = (e) => {
    axios.post("http://localhost:3000/studata", Data).then(() => {
      alert("Data sent succfully.........")
    }).catch((err) => {
      console.log(err);
    })

  }


  ////////////////Edit
  const [form, setedit] = useState(null)

  // const handlechange= (e) => {
  //   let name = e.target.name;
  //   let value = e.target.value
  //   setedit(values => ({ ...values, [name]: value }))
  // }

  const openform = (user) => {
    setedit(user);
  }

  const handleupdate = (e) => {
    axios.put(`http://localhost:3000/studata/${form.id}`,form).then(() => {
      alert("Edited...........")
      fetchdata()
    }).catch((err) => {
      console.log(err);
    })

    setedit(null)
  }

///////////////Delete

const del=(id)=>{
  axios.delete(`http://localhost:3000/studata/${id}`).then(()=>{
    alert("Deleted .......");
    fetchdata();
  }).then((err)=>{
    console.log(err);
  })
}




  return (
    <div>
      <h1>This is crud operation.............</h1>
      <form onSubmit={(e) => senddata(e)}>
        Enter rollno: <input type="text" name="rollno" onChange={handlechange} /><br></br><br></br>
        Enter name: <input type="text" name="name" onChange={handlechange} /><br></br><br></br>
        Enter age: <input type="text" name="age" onChange={handlechange} /><br></br><br></br>
        Enter city: <input type="text" name="city" onChange={handlechange} /><br></br><br></br>
        <input type="submit" />
      </form>

      <table>
        <thead>
          <tr>
            <th>Rollno</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {mydata.map((e) => (
            <tr key={e.id}>
              <td>{e.rollno}</td>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.city}</td>
              <td onClick={() => openform(e)}>Edit</td>
              <td onClick={()=>del(e.id)}>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>    <br></br><br></br>



      {form && (
        <form onSubmit={handleupdate}>
          Enter rollno: <input type="text" name="rollno" value={form.rollno} onChange={handlechange} /><br></br><br></br>
          Enter name: <input type="text" name="name" value={form.name} onChange={handlechange} /><br></br><br></br>
          Enter age: <input type="text" name="age" value={form.age} onChange={handlechange} /><br></br><br></br>
          Enter city: <input type="text" name="city" value={form.city} onChange={handlechange} /><br></br><br></br>
          <input type="submit" />
        </form>
      )}




    </div>
  )
}

export default Crud2