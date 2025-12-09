import React, { useEffect, useState } from 'react'
import axios from "axios"

const Crud = () => {
    const [Data, getdata] = useState([]);
    const mydata = () => {
        axios.get("http://localhost:3000/mydata").then((res) => {
            getdata(res.data)
        })
    }


    useEffect(() => {
        mydata();
    }, [])


    const deldata=(id)=>{
        axios.delete(`http://localhost:3000/mydata/${id}`).then(()=>{
            alert("Data deleted........")
            mydata();
        })
    }


    const [form,setedit]=useState(null);

      const handlechange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setedit(values=>({...values,[name]:value}))
    }

    const openform=(user)=>{
        setedit(user);   
    }

    const editData=(id)=>{
        axios.put(`http://localhost:3000/mydata/${form.id}`,form).then(()=>{
            alert("Edited..........")
            mydata();
        })
        setedit(null);
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Rollno</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                        <th >Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>

                <tbody>
                    {Data.map((e) => (
                        <tr key={e.id}>
                            <td>{e.rollno}</td>
                            <td>{e.name}</td>
                            <td>{e.age}</td>
                            <td>{e.city}</td>
                            <td onClick={() => (deldata(e.id))}>Delete</td>
                            <td onClick={()=>(openform(e))}>Edit</td>
                        </tr>
                    ))}
                </tbody>
            </table>

      {     ( form && 
          (  <form onSubmit={editData}>
            Enter Rollno: <input type="text" name="rollno" value={form.rollno} onChange={handlechange}/><br></br><br></br>
            Enter Name: <input type="text" name="name" value={form.name} onChange={handlechange} /><br></br><br></br>
            Enter Age: <input type="text" name="age"   value={form.age}  onChange={handlechange}/><br></br><br></br>
            Enter City: <input type="text" name="city" value={form.city} onChange={handlechange}/><br></br><br></br>
            <input type="submit" />
        </form>          
        ))}
            
        </div>
    )
}

export default Crud