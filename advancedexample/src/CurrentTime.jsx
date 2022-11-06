import React, { useState } from "react";

const CurrentTime =()=>{
    let curTime=new Date().toLocaleTimeString();
    const [currentTime,setCurrentTime]=useState(curTime);
    
    
    const UpdateNewTime=()=>{
        const newTime=new Date().toLocaleTimeString();
        setCurrentTime(newTime);
    }
    return(
        <div className='eventSection'>
            <h2 className="heading">Current Time</h2>
            <h3>{currentTime}</h3>
            <button onClick={UpdateNewTime}>Get New Time</button>
        </div>
    );
}
export default CurrentTime;