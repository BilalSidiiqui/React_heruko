import React, { Component } from 'react'
import Footer from './footer'
import './OpStyle.css'

 class trustsafety extends Component {
    render() {
        return (
            <div className='App' style={{backgroundColor:"#D3D3D3"}}>
            <div className="Main">
        <div className='Outer' style={{backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfk0-2M94P4FD_MYcChlbOUPw_h-TXbDuBlTh4JsXUN2JLpw1Aixhgp1DZ61E9akBXYQg&usqp=CAU")` }}>
        <div className='inner-container'>
           
        
        <h1 style={{ fontWeight:'bolder'}}>Trust Matters Most</h1>
        
        <text style={{fontSize:22, fontWeight:'bold'}}>Multiple Buyers and Sellers,
But your trust & safety is our #1 priority.</text >

<h2 style={{marginTop:50}}>Buy And Sell, Worry Free</h2>
        <text style={{fontSize:22}}>With tons of orders taking place, ArtMandi uses the latest high tech anti-fraud and data security measures to keep your transactions and data safe..</text >


         <p className='text' style={{fontWeight:'bold', marginTop:20}}>Personal Details</p>
          <p className='text'>ArtMandi  values your privacy. Your data is secure at all times and we'll never share your personal information with third parties.</p>
        
           <p className='text' style={{fontWeight:'bold'}}>Safe Payments</p>
           <p className='text'>All transactions are conducted on the ArtMandi platform. Whether a buyer uses a credit card, Payooner and PayPal or other form of payment, we handle everything, and ensure the security of your personal details. </p> 
        
           <p className='text' style={{fontWeight:'bold'}}>Secure Artwork Deliveries</p>
           <p className='text'> Your Artwork will safely delivered at your doorstep and if any damage appears, ArtMandi will be responsible for that and Your Payment will be revert back.</p>
           
        </div> 
        </div>
        <br/><br/><br/><br/><br/><br/><br/>
        </div>
           <Footer/>
        </div>
        )
    }
}
export default trustsafety