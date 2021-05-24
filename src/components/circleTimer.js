

import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./styles.css";

    const minuteSeconds = 60;
     const hourSeconds = 3600;
     const daySeconds = 86400;
     
     const timerProps = {
       isPlaying: true,
       size: 120,
       strokeWidth: 6
     };

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};
const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

const Timer=(props)=> {

    const [remainingTime,setRemainingTime]=useState(0)
    const [daysDuration,setDaysDuration]=useState(0)

const url=`http://127.0.0.1:8000/Listing/${props.id}/`;
const [product,setproduct] =useState("");
const checkAndCloseBid = ()  => {
    console.log("Check")
    if(remainingTime<= 0){
        //Todo api close bid
    }
}
useEffect(()=>{
  axios.get(url)
  .then(response => {
    setproduct(response.data)
    const interval = getTimeInterval(response.data.end_date)
    setRemainingTime(interval)
    const days = Math.ceil(interval / daySeconds);
  const daysDuration = days * daySeconds;
  setDaysDuration(daysDuration)
  console.log(daysDuration)
  console.log(interval)
  })
}, [])

useEffect(
    checkAndCloseBid,[remainingTime]
)


// const FINISHTIME= JSON.stringify(product.end_date)


//   const stratTime = Date.now() / 1000;
//   const endTime =  new Date("2021-05-26") / 1000;
//   console.log(stratTime)
//   console.log(endTime)
//   const remainingTime = endTime - stratTim


  
  const getTimeInterval  = (time) => {
    //   const startTime  = Date.now() /1000
    console.log(time)
    const startTime = Date.now()/1000
          const endTime = new Date(`${time}`)
      const remainingTime =  (endTime/1000) - startTime;
    console.log(remainingTime)
      return remainingTime
  }


  return (
    <div className="Timmer">
        <text style={{ marginTop:30,marginRight:20,fontWeight:'bold',fontSize:25}}>TIME LEFT </text>
            {remainingTime>0 && <CountdownCircleTimer
            {...timerProps}
            colors={[["#218380"]]}
            duration={daysDuration}
            initialRemainingTime={remainingTime}
            onComplete={(e)=>{console.log(e)}}
            >
            {({ elapsedTime }) =>
                renderTime("days", getTimeDays(daysDuration - elapsedTime))
            }
            </CountdownCircleTimer>}
     
      {remainingTime>0 && <CountdownCircleTimer
        {...timerProps}
        colors={[["#218380"]]}
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > hourSeconds
        ]}
      >
        {({ elapsedTime }) =>
          renderTime("hours", getTimeHours(daySeconds - elapsedTime))
        }
      </CountdownCircleTimer>}
     
      {remainingTime>0 && <CountdownCircleTimer
        {...timerProps}
        colors={[["#218380"]]}
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > minuteSeconds
        ]}
      >
        {({ elapsedTime }) =>
          renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
        }
      </CountdownCircleTimer>}
     
      {remainingTime>0 && <CountdownCircleTimer
        {...timerProps}
        colors={[["#218380"]]}
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => {
            console.log(totalElapsedTime)
            return [
          remainingTime - totalElapsedTime > 0
        ]}}
      >
        {({ elapsedTime }) =>
          renderTime("seconds", getTimeSeconds(elapsedTime))
        }
      </CountdownCircleTimer>}
    </div>
  );
}

export default Timer;