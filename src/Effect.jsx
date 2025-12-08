import React, { useState } from "react";
import {useEffect } from "react";

const Effect=()=>{
    // const [counter,increcounter]=useState(0)
    // const incre=()=>{
    //     increcounter(counter+1);
    // }
    // useEffect(()=>{
    //     console.log("counter updated:",counter)
    // },[counter])
    // return(
    //     <>
    //     <h1>{counter}</h1><br></br>
    //     <button onClick={incre}>Incre</button>
    //     </>
    // )


const [users,setusers]=useState([]);
useEffect(()=>{
    const fetchdata=async ()=>{
        let api='https://jsonplaceholder.typicode.com/users';
        let res= await fetch(api);
        let data= await res.json();
        setusers(data);
        console.log(data)
    }
    fetchdata();
},[])

    return(
        <>
        <div>
       <h1>User list</h1>
      {users.length===0?(<h1>Loading......</h1>):(
        users.map((user)=>(
            <div key={user.id}>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
            </div>
        ))
      )}
        </div>
        </>
    )
}

export default Effect
