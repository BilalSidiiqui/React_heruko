import React from 'react'
import Footer from './footer'
import userServices from '../Services/UserServices'

 function Verify() {
    const [uid,setuid]=React.useState();
    const [token,settoken]=React.useState();
 
    return (
        <div className='App' style={{backgroundColor:"#D3D3D3"}}>
            <div className="Main"style={{backgroundImage: `url("http://s8.favim.com/orig/150717/50-shades-of-grey-art-blue-cool-Favim.com-2969359.jpg")`,minHeight:'70vh'}}>   
             <div className='OuterVerify' style={{backgroundImage: `url("http://s8.favim.com/orig/150717/50-shades-of-grey-art-blue-cool-Favim.com-2969359.jpg")`,overflowX:'hidden',backgroundSize:'45%'}}>
    <div className='innerVerify-container' style={{marginTop:45,width:'55%',padding:80,marginBottom:45,float:'left',backgroundColor:'#fff'}}>
    <h1 style={{textAlign:'center', color:'#000'}}>VERIFY ACCOUNT</h1>
             <hr  style={{
    color: '#7a7d85',
    height: 0.5,
    borderColor : '#000',
    width:'38%',
    marginRight:220
}}/>
    <p style={{fontSize:20,fontWeight:50,marginBottom:40}}>Kindly check your Email account for verification process and enter the required Information here.</p>

    <div className="form-group">
        <label> Uid</label>
        <input type="text" style={{marginLeft:200,width:300}} className="form-control" placeholder="Enter UID number"   value={uid} onChange={e=>{
                        setuid(e.target.value)
                    }}/>
    </div>

                <div className="form-group">
                    <label>token</label>
                    <input type="text"  style={{marginLeft:200,width:300}}className="form-control" placeholder="Enter Token"  value={token} onChange={e=>{
                        settoken(e.target.value)
                    }} />
                </div>
                <button style={{marginTop:30,width:140,marginLeft:280}} type="submit" className="btn btn-primary btn-block" onClick={e=>{
                       
                       userServices.verifyaccount(uid,token).then((data)=>{
                        alert("account has been Verified successfully!")
                        window.location='/login'
                
                
                    }).catch(err=>{
                    alert(err.message)
                        console.log(err)
                    })
                
                   
                   
                }}>VERIFY </button>

    </div>

    </div> 
    </div>
    
       <Footer/>
    </div>
    )
}
export default Verify;