import { useState } from "react"

const Form=()=>{
    const [formdata,setdata]=useState({})

    const handlechange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setdata(values=>({...values,[name]:value}))
    }


    const [showdata,senddata]=useState(null)
    const submitdata=(e)=>{
        e.preventDefault;
        senddata(formdata);
    }



    return(
        <>
        <form action={submitdata}><br></br><br></br>
            Enter Name: <input type="text" name="name" onChange={handlechange} /><br></br><br></br>
            Enter age: <input type="text" name="age" onChange={handlechange}/><br></br><br></br>
            Enter email: <input type="text" name="email" onChange={handlechange} /><br></br><br></br>
            Enter city: <input type="text" name="city" onChange={handlechange} /><br></br><br></br>
            <input type="submit" />
        </form>


        {showdata && (
              <table border="1" cellPadding={"10"}>
          <thead><tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>City</th></tr>
          </thead>
          <tbody>
            <tr>
                <td>{formdata.name}</td>
                <td>{formdata.age}</td>
                <td>{formdata.email}</td>
                <td>{formdata.city}</td>
            </tr>
          </tbody>
          </table>
        )}
        
        </>
    )
}

export default Form