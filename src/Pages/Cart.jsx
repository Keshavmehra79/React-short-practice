import React from 'react'
import axios from "axios";
import {useDispatch} from "react"
import {useState} from "react"
import {useEffect} from"react"
function Cartdata() {
  const [mydata,setmydata]=useState([]);
  const loaddata=async ()=>
  {
    try {
      const response=await axios.get("http://localhost:3000/ecomdata")
      setmydata(response.data);      
    }
    catch (error) {
      console.error("Error fetching data:",error);
    }
  };

  useEffect(()=>{
    loaddata();
  },[]);
  
  return (<>
  <h1>This is cart......</h1>
  
  </>
  )
}

export default Cartdata