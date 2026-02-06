import React from 'react'
import { useDispatch } from 'react-redux'
import { addtoCart } from './CartSlice';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

import  Card from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Button';
function Cart() {

  const[mydata,setmydata]=useState([]);
  const dispatch=useDispatch();

  const loaddata= async()=>{
      try{
        const res=await axios.get("http://localhost:3000/ecomdata");
        setmydata(res.data);
      }
      catch(err){
        throw err;
      }
  }


  useEffect(()=>{
    loaddata()
  },[])

    const ans=mydata.map((key)=>{
      return(
        <>
        <Card>
          <Card.Img variant='top' src={key.image}  style={{height:"250px"}} />
          <Card.Body>
              <Card.Title>{key.name}</Card.Title>
            <Card.Text>
              {key.description}
              <h2>Price:{key.price}</h2>
            </Card.Text>
            <Button variant="primary"
            onClick={()=>{dispatch(addtoCart({id:key.id,name:key.name,
              description:key.description,qunty:key.qunty,price:key.price,image:key.image

            }))}}>Add to  Cart</Button>
          </Card.Body>
        </Card>
        </>
      )
    })


  

  return (<>
  <div style={{display:"flex",justifyContent:"space-between",margin:"10px", flexWrap:"wrap"}}>
    {ans}
  </div>
  </>
  )
}

export default Cart