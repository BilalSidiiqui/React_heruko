import React ,{ useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router';
import FOOTER from './footer';
import userServices from "../Services/UserServices";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from "@stripe/stripe-js/pure";
import CheckoutForm from "./CheckoutForm";
import Table from 'react-bootstrap/Table'

const stripePromise = loadStripe('pk_test_51Is5oDBokRZBbAhwWIBQE1IEAKLvOPG4cpZl2UW3RzjVKPNq1NI4ZVd8vut1IOd7taWARe049AsomCoyfEgVajrp005CMzVMFt');

 function Aftersold() {
  

var {id} = useParams()  
const url=`https://artmandi.herokuapp.com/Listing/${id}/`;

const [Aftersold,setAftersold] =useState(null);



let content=null;

useEffect(()=>{
  axios.get(url)
  .then(response => {
    setAftersold(response.data)
  })
}, [url])


if(Aftersold){
  content=
  
<div style={{backgroundColor:'#F8F8F8'}}>

<h5 style={{fontSize:40,paddingTop:50}}> {Aftersold.title}</h5>
<div className='row' style={{backgroundColor:'#F8F8F8'}}>
  
<img src={Aftersold.image} style={{height:400,width:400,marginLeft:300,marginTop:150}} />
  
  <div style={{marginLeft:100,marginTop:50}} className='col-4'> 
  <text style={{marginRight:350}}>Aftersold Product Info</text>
  <Table striped bordered hover>
  <thead>
    <tr>
     
      <th>Win By</th>
      <th>Sold At</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{width:120}}>{Aftersold.winner_username}</td>
      <td style={{width:80}}>${Aftersold.winner_bidprice}</td>
      <td>{Aftersold.description}</td>
    </tr>
    </tbody>
     </Table>
     <Elements stripe={stripePromise}>
    <CheckoutForm winprice={Aftersold.winner_bidprice}
      id={id}/>
  </Elements>
     </div>
     </div>
     </div>
}
    return (
        <div className="App"  style={{backgroundColor:"#F8F8F8"}}>
     {content}

     
 
     <br/><br/><br/><br/><br/><br/>
     <br/><br/><br/><br/><br/><br/>
     
     
     <FOOTER />
  </div>
    )
    }
export default Aftersold;