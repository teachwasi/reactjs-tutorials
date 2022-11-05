import React from "react";
/** For componet Call */

function App(){
    let dateObj=new Date();
    let curTime=dateObj.getHours();
    let wishesMessage="We are waiting for greeting";
    let wishesCssStyle={};
    if(curTime>1 && curTime<11){
        wishesMessage="Good Morning";
        wishesCssStyle.color="green";
    }else if(curTime>11 && curTime<19){
        wishesMessage="Good Afternoon";
        wishesCssStyle.color="Yellow";
    }else if(curTime>19 && curTime<24){
        wishesMessage="Good Night";
        wishesCssStyle.color="Blue";
    }
    return(
        <React.Fragment>
            <div className='section'>
                <h1 className='heading'>Hello Sir</h1>
                <p className='greetingMessage' style={wishesCssStyle}>{wishesMessage}</p>
            </div>
        </React.Fragment>
    )
}
export default App;