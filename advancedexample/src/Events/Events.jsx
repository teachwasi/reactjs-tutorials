import React, { useState } from "react";

const Events =()=>{
    const [bgColor,setBgColor]=useState("#ff0000");
    const [name,setName]=useState("Click Me");
    const bgChange=()=>{
        setBgColor("#000000");
        setName("WOW Clicked For Revert Click Double🐺");
    }

    const revertBgChange=()=>{
        setBgColor("#ff0000");
        setName("Click Me");
    }
    return(
        <div className='eventSection' style={{backgroundColor:bgColor}}>
            <h2 className="heading">-- Events :: Using --</h2>
            <button onClick={bgChange} onDoubleClick={revertBgChange}>{name}</button>
        </div>
    );
}
export default Events;