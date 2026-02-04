import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Getdata() {

  const [mydata, setMydata] = useState([]);
  const [data, setData] = useState({});

  const handlechange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/mydata", data);
      alert("Data sent successfully");
      loaddata(); // refresh table
    } catch (err) {
      console.log(err);
    }
  };

  const loaddata = async () => {
    const response = await axios.get("http://localhost:3000/mydata");
    setMydata(response.data);
  };

  useEffect(() => {
    loaddata();
  }, []);

  const mydel = async (id) => {
    await axios.delete(`http://localhost:3000/mydata/${id}`);
    alert("Data deleted");
    loaddata();
  };

  return (
    <>
      <h1>This is fetching data</h1>

      <form onSubmit={handlesubmit}>
        Enter Rollno:
        <input type="text" name="rollno" onChange={handlechange} /><br /><br />
        Enter Name:
        <input type="text" name="name" onChange={handlechange} /><br /><br />
        Enter Age:
        <input type="text" name="age" onChange={handlechange} /><br /><br />
        Enter City:
        <input type="text" name="city" onChange={handlechange} /><br /><br />
        <input type="submit" />
      </form>

      <table border="1">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {mydata.map((item) => (
            <tr key={item.id}>
              <td>{item.rollno}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
              <td>
                <button onClick={() => mydel(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Getdata;