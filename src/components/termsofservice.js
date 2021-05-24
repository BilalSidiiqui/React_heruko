import React, { Component } from 'react'
import Footer from './footer'
import './OpStyle.css'
 class termsofservice extends Component {
    render() {
        return (
            <div className='App' style={{backgroundColor:"#D3D3D3"}}>
            <div className="Main">
        <div className='Outer' style={{backgroundImage: `url("https://mymodernmet.com/wp/wp-content/uploads/2019/03/elements-of-art-6.jpg")` }}>
        <div className='inner-container'>
        <h1>ArtMandi's Terms Of Services</h1>
        <p className='text'>
        The following terms of service (these "Terms of Service"), govern your access to and use of the ArtMandi website and mobile application, including any content, functionality and services offered on or through ArtmandiWebsite or the Artmandi mobile application        </p>
          <p className='text' style={{fontWeight:'bold'}}>Buyers</p>
          <p className='text'> Buyers are users who purchase artwork on Artmandi.</p>
           <p className='text' style={{fontWeight:'bold'}}>Sellers  </p>
           <p className='text'>Sellers are users who offer and make atrwork and sell on Fiverr.</p> 
           <p className='text' style={{fontWeight:'bold'}}>Bidding</p>
           <p className='text'> A certain time for bidding will provided and after that the bidding stops and highest bids wins.</p>
           <p className='text' style={{fontWeight:'bold'}}>Payment</p>
           <p className='text'>At Initial stages, Cash of Delivery is a payment method, but after Final development stage, users can buy thorugh bank cards. </p>
           
        </div> 
        </div>
        <br/><br/><br/><br/><br/><br/><br/>
        </div>
           <Footer/>
        </div>
        )
    }
}
export default termsofservice;