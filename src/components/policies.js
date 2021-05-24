import React, { Component } from 'react'
import Footer from './footer'
import './OpStyle.css'
 class policies extends Component {
    render() {
        return (
            <div className='App' style={{backgroundColor:"#D3D3D3"}}>
            <div className="Main"  >
        <div className='Outer' style={{backgroundImage: `url("https://blogs.uoregon.edu/rreidaad250/files/2014/05/art-auction-10e3hqz.jpg")` }}>
        <div className='inner-container'>
        <h1>ArtMandi Privacy Policy</h1>
        <p className='text'>
        Please read this privacy policy (the “Policy”) carefully to understand how we use personal information. If you do not agree with this Policy, your choice is not to use Fiverr.com site and mobile applications and its related sites, applications, services and goods or any other website operated by Fiverr that links to this Policy (the “Site”). By accessing or using this Site, you agree to this Policy. This Policy may change from time to time; any changes we make to this Policy will be posted on this Site, we will also take any other steps, to the extent required by applicable law, including notifying you and/or seeking your explicit consent to material changes. Changes to this Policy are effective as of the stated "Last Updated" date. Other than where we have sought such explicit consent from you, your continued use of the Site after we make changes will constitute acceptance of, and agreement to be bound by, those changes, so please check the Policy periodically for any updates or changes.        
        </p>
          <p className='text' style={{fontWeight:'bold'}}>How Long Do We Keep Personal Information</p>
          <p className='text'>  We will keep personal information only for as long as is required to fulfil the purpose for which it was collected. However, in some cases we will retain personal information for longer periods of time. </p>
           <p className='text' style={{fontWeight:'bold'}}>Children Under the Age of 13 </p>
           <p className='text'>Our Site is not intended for children under 13 years of age and we do not knowingly collect personal information from children under 13. </p> 
           <p className='text' style={{fontWeight:'bold'}}>Where We Store Personal Information</p>
           <p className='text'> Some of the personal information you provide to us will be stored or processed on our behalf by third party suppliers and data processors and may be located in our server</p>
           <p className='text' style={{fontWeight:'bold'}}>Security</p>
           <p className='text'> We take great care in maintaining the security of the Site and your information and in preventing unauthorized access, loss, misuse, alteration, destruction or damage to it through industry standard technologies and internal procedures.</p>
           
        </div> 
        </div>
        <br/><br/><br/><br/><br/><br/><br/>
        </div>
           <Footer/>
        </div>

            
        )
    }
}
export default policies;