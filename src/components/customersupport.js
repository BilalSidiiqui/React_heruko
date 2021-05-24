
import React from 'react'
import Footer from './footer'
import './OpStyle.css'


 function customersupport() {
    return (
        <div className='App' style={{backgroundColor:"#D3D3D3"}}>
            <div className="Main">
        <div className='Outer' style={{backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa1FdRo0Edbfji0o3AHdJgzfHJ0fI8RgzcGQ&usqp=CAU")` }}>
        <div className='inner-container'>
           
        <h1>ArtMandi Customer Support</h1>
        <p className='text'>
        Please read this Customer Support carefully to understand how users can ask their quries. Our cutomer support team is available 24/7. Send your query emails at the email account provided below. </p>
          <p className='text' style={{fontWeight:'bold'}}>Customer Support Policies</p>
          <p className='text'>If customer feel any change in the product, He/She can contact our team and Then the product will deliver back to our selves and went into inspection phase.</p>
           <p className='text' style={{fontWeight:'bold'}}>Delivery Support</p>
           <p className='text'>The artwork is delivered at the door step of the user after getting their Home Address. </p> 
           <p className='text' style={{fontWeight:'bold'}}>Drop your queries at</p>
           <p className='text'> bilalsiddiqui1311@gmail.com</p>
           
        </div> 
        </div>
        <br/><br/><br/><br/><br/><br/><br/>
        </div>
           <Footer/>
        </div>
    )
}
export default customersupport;