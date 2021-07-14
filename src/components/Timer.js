import React , {useState,useEffect,useRef} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import userServices from '../Services/UserServices'

function Timer() {

  const[timerdays,settimerdays]=useState('00');
const[timerhours,settimerhours]=useState('00');
const[timerminutes,settimerminutes]=useState('00');
const[timerseconds,settimerseconds]=useState('00');
var {id} = useParams()  
const url=`https://artmandi.herokuapp.com/Listing/${id}/`;


const [product,setproduct] =useState('00');

let interval=useRef();

useEffect(()=>{
  axios.get(url)
  .then(response => {
    setproduct(response.data)
  })
}, [])

const Starttimer=()=>{
 

  const endtime = new Date(product.end_date). getTime();

  interval= setInterval(() => {
    const now= new Date(). getTime();
    const distance= endtime-now;

    const days= Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours= Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes= Math.floor(distance % (1000 * 60 * 60 )/ (1000 * 60));
    const seconds= Math.floor(distance % (1000 * 60) / 1000);

    if(distance < 0){
      clearInterval(interval.current);
      var listing = id
      userServices.closeBid(listing).then((data)=>{
        alert("Product has been sold!")
        window.location.href="/SoldProducts"
        })
    }
    else
    {
      settimerdays(days);
      settimerhours(hours);
      settimerminutes(minutes);
      settimerseconds(seconds);
    }




  }, 1000);
}

useEffect(()=>{
  Starttimer();
  return()=>{
clearInterval(interval.current)
  }
})

  return (
    <div className="container">

      <div className='row' style={{fontSize:20,fontWeight:'bold',marginLeft:10}}>
      <text style={{fontSize:20,fontWeight:'bold',marginTop:15,marginRight:14}}>TIME LEFT: </text>

      <div style={{marginRight:20}}>

{timerdays>=0 &&   <text >{timerdays}</text>  
}          <br/>
      <text>days</text>
      </div>
      <div style={{marginTop:13,marginRight:10}}>:</div>
      <div style={{marginRight:17}}>
       {timerhours>=0 && <text>{timerhours}</text>}
        <br/>
        <text>hours</text>
      </div>
      <div style={{marginTop:13,marginRight:10}}>:</div>

      <div style={{marginRight:17}}>
{timerminutes>=0 &&        <text>{timerminutes}</text>
}        <br/>
        <text>minutes</text>
      </div>
      <div style={{marginTop:13,marginRight:10}}>:</div>

      <div style={{marginRight:17}}>
{timerseconds>=0 &&<text>{timerseconds}</text>}
        <br/>
        <text>seconds</text>
      </div>
      </div>
    </div>
  )
}
export default Timer;