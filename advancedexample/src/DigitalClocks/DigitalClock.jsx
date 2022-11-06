import React, { useState } from "react";

const DigitalClock =()=>{
    let curTime=new Date().toLocaleTimeString();
    const [currentTime,setCurrentTime]=useState(curTime);

    const UpdateNewTime=()=>{
        const newTime=new Date().toLocaleTimeString();
        setCurrentTime(newTime);
    }
    setInterval(UpdateNewTime,1000);
    return(
        <div className='eventSection'>
            <h2 className="heading">Digital Clock: Time</h2>
            <h3>{currentTime}</h3>
        </div>
    );
}
export default DigitalClock;