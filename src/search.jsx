import React, { useState,useEffect } from "react";
import axios from 'axios'
const Search=()=>{
     const [mydata, setmydata] = useState([]);
     const [search,setsearch]=useState("");
  const fetchdata = () => {
    axios.get("http://localhost:3000/studata").then((res) => {
      setmydata(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    fetchdata();
  }, [])

  const [display,setdisplay]=useState(null)

const filterdata = mydata.filter((item) => {
  return item.name.toLowerCase().includes(search.toLowerCase());
});


console.log(filterdata)
  return(
    <>
    Enter name: <input type="text" value={search} onChange={(e)=>setsearch(e.target.value)}/><br></br>
    <button onClick={()=>setdisplay(1)}>Search</button><br></br>

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
            {display && 
                filterdata.map((key)=>(
                    <tr key={key.id}>
                            <td>{key.rollno}</td>
                            <td>{key.name}</td>
                            <td>{key.age}</td>
                            <td>{key.city}</td>
                    </tr>
                )
            )}
        </tbody>
    </table>
    </>
  )


}
export default Search