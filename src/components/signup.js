import React ,{ useState, useEffect} from 'react'
import axios from 'axios';import { Link } from 'react-router-dom';
import FOOTER from './footer';
import userServices from "../Services/UserServices";
import '../App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 function Signup (){
    const [username,setusername]=React.useState();
     const [email,setEmail]=React.useState();
    const[password,setpassword]=React.useState();
    const[confirmPassword,setconfirmPassword ]=React.useState();
    
    const UserError = () => {
        toast.error("Username cannot contain Special character!",{
        position:"top-center"
        }
    );}
    
    const EmailLengthError=()=>{
        toast.error("Email should contain more words, not only @",{
            position:"top-center" 
        })
    }
    const UserLengthError = ()=>{
        toast.error("User Name should be more than 2 Letters",{
           position:"top-center"   
        })
    }   

    const EmailError = () => {
        toast.error("Email should contain @ symbol!",{
            position:"top-center"
            }
                );}
    
    const EmailotherError = () => {
        toast.error("Email should not contain special symbol except @",{
            position:"top-center"
            }
                );}

     const PasswordLengthError = ()=>{
         toast.error("Password should be more than 6 digits",{
            position:"top-center"   
         })
     }           
    const PasswordError = () => {
        toast.error("Password should be equal to Confirm Password",{
            position:"top-center"
            });}

   

    return (
        <div className="App"  style={{backgroundColor:"#D3D3D3"}}>
        <div className="SignupForm"
            style={{display: "flex",
            justifyContent: "center",
            alignItems: "center",
            }}>
                <div>
            <form>
          

<div className="IMAGE"> 
<img src="https://raw.githubusercontent.com/ipenywis/react-login-register/e00bd4637183df94e54c8a19a80b5262834da8f7/src/login.svg" 
style={{height:170,  width:250}}/>
</div>
<h3>Sign Up</h3>

    <div className="form-group">
        <label> Username</label>
        <input type="text" className="form-control" placeholder="User name"   value={username} onChange={e=>{
                        setusername(e.target.value)
                    }}/>
    </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="abc123@xyz.com"  value={email} onChange={e=>{
                        setEmail(e.target.value)
                    }} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={e=>{
                        setpassword(e.target.value)
                    }} />
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Enter password again" value={confirmPassword} onChange={e=> {setconfirmPassword(e.target.value)}}/>
                </div>
                </form>
                <button  type="button" class="btn btn-primary" style={{marginBottom:'10px'}}
                onClick={e=>{
                    if(username.length<=2){
                        {UserLengthError()}
                    }
                   else if(username.includes("@") || username.includes("!")|| username.includes("#")|| username.includes("$")|| username.includes("%")|| username.includes("^")|| username.includes("&")|| username.includes("*")|| username.includes("(")|| username.includes(")")){
                        {UserError()}
                    }
                   else if(!email.includes("@")){
                        {EmailError()}
                    }
                    else if( email.includes("!")|| email.includes("#")|| email.includes("$")|| email.includes("%")|| email.includes("^")|| email.includes("&")|| email.includes("*")|| email.includes("(")|| email.includes(")"))
                    {
                        {EmailotherError()}
                    }
                  else if(email.length<=5){
                        {EmailLengthError()}
                      }
                    else if(password.length <= 6)
                    {
                        {PasswordLengthError()}
                    }
                   else  if(password!=confirmPassword){
                        {PasswordError()}
                    }
                    else{
                    userServices.register(username, email, password, confirmPassword).then((data)=>{
                      toast.success(data.message,{
                                position:"top-center"
                                })
                        console.log(data)
                    window.location='/verify'
              
                    }).catch(err=>{
                    alert(err.message)
                        console.log(err)
                    })
                }}}
                 >Sign Up</button>
                <p className="forgot-password text-right">
                    Already A Member?
                     <Link to ='/login'>sign in</Link>
                </p>
            </div>
            
            <ToastContainer />
            </div>
           <FOOTER/>
        </div>
    )
}
export default Signup;