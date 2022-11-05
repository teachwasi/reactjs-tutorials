import React from "react";

const SlotMachine = (props) =>{
    /*let x =props.x;
    let y =props.y;
    let z =props.z;*/
    let {x,y,z}=props;
    if((x===y) && (y===z)){
        return (
            <>
                {x} {y} {z}
                <h2 className="subheading">This is matching</h2>
            </>
        )
    }else{
        return (
            <>
                {x} {y} {z}
                <h2 className="subheading">This is not matching</h2>
            </>
        )
    }
}
export default SlotMachine;