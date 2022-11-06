import React, { useState } from "react";
function OnClick(){
    const [counter,setCounter]=useState(0);
    const IncrementNumber=()=>{
        setCounter(counter+1);
    }
    return(
        <div className='onclickBox'>
            <h2 className="heading">On Click Event</h2>
            <h3>{counter}</h3>
            <button onClick={IncrementNumber}>Click Me</button>
        </div>
    )
}
export default OnClick