import React from 'react'
import { useSelector } from 'react-redux'
import Table from "react-bootstrap/Table"
import Button from 'react-bootstrap/Button'
import { quntyInc,quntyDec,removeCart } from './CartSlice'
import { useDispatch } from 'react-redux'
function Cartdata() {
  const cartdata=useSelector(state=>state.mycart.cart);
  const dispatch=useDispatch()
  let totalAmount=0;
  const ans=cartdata.map((key)=>{
    return(<>
    {totalAmount+=key.price*key.qunty}
    <tr>
      <td><img src={key.image} alt="" width="100" height="100" /></td>
      <td>{key.name}</td>
      <td>{key.description}</td>
      <td>
        <Button variant='primary' onClick={()=>{dispatch(quntyInc({id:key.id}))}}>+</Button>
          {key.qunty}
        <Button variant='primary' onClick={()=>{dispatch(quntyDec({id:key.id}))}}>-</Button>
      </td>
      <td>{key.price}</td>
      <td>{key.price*key.qunty}</td>
      <td>
        <button onClick={()=>{dispatch(removeCart({id:key.id}))}}>Delete</button>
      </td>
          </tr>
    
    
    </>)
  })
  return (<>
  <h1 align="center">Cartdata</h1>
  <h2 align="center">Total Net Amount:{totalAmount}</h2>
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>name</th>
        <th>description</th>
        <th>qunty</th>
        <th>price</th>
        <th>total</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {ans}
    </tbody>
  </Table>
  </>
  )
}

export default Cartdata