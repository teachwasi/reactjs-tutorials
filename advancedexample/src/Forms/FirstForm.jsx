import React, { useState } from "react";
const FirstForm =()=>{
    const [curInputData,setCurInputData]=useState("");
    const [curFullInputData,setCurFullInputData]=useState("");
    const inputElement=(event)=>{
        setCurInputData(event.target.value);
    }
    const onSubmit=()=>{
        setCurFullInputData(curInputData);
    }
    return(
        <div className='eventSection'>
            <h2 className="heading">-- First Sample Form :: Using --</h2>
            <h2 className="subheading">Hello {curFullInputData}</h2>
            <input type="text" placeholder="Enter Your Name" onChange={inputElement} value={curInputData} />
            <button onClick={onSubmit}>Submit</button>
        </div>
    );
}
export default FirstForm;