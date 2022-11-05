import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
//import ReactDOM from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
/** Single Node Example */
/*root.render(
  <h1>Hello Waseem</h1>
);*/
/** Multiple Node Example */
/*root.render(
  <div>
    <h1>Hello Waseem</h1>
    <p>Software Developer</p>
  </div>
);*/
/** Multiple Node Using Array Example */
/*root.render(
  [
    <h1>Hello Waseem</h1>,
    <p>Software Developer</p>
  ]
);*/

/** Multiple Node Using Fragment Example */
/*root.render(
  <React.Fragment>
    <h1>Hello Waseem</h1>
    <p>Software Developer</p>
  </React.Fragment>
);*/

/** JSX Exporession Example */
/*const name="Waseem";
root.render(
  <React.Fragment>
    <h1>Hello {name}</h1>
    <p>Software Developer Exp {5+3}</p>
  </React.Fragment>
);*/

/** JSX Exporession using template Example */
/*const fname="Waseem";
const lname="Ahmad";
const dateObj=new Date();
root.render(
  <React.Fragment>
    <h1>Hello {fname}</h1>
    <p>{`My full name is ${fname} ${lname}`}</p>
    <p>{`My first name is ${fname} and last name is ${lname}`}</p>
    <p>Software Developer Exp {5+3}</p>
    <p>Today Date: {dateObj.toLocaleDateString()}</p>
    <p>Current Time: {dateObj.toLocaleTimeString()}</p>
  </React.Fragment>
);*/

/** JSX Attributes Example */
/*const fname="Waseem";
root.render(
  <React.Fragment>
    <h1>Hello {fname}</h1>
    <p contentEditable="true">Software engineer</p>
    <a href='https://easytolearning.com/' target="_blank"><img src='https://picsum.photos/200/300' alt='Image'/></a>
  </React.Fragment>
);*/
/*const fname="Waseem";
const para={
  color:"#ff0000",
  textTransform:"capitalize"
}
root.render(
  <React.Fragment>
    <h1 className="heading">Hello {fname}</h1>
    <p style={para}>Software engineer</p>
    <p style={{color:"#ff0000",textTransform:"capitalize"}}>Software engineer TT</p>
    <a href='https://easytolearning.com/' target="_blank"><img src='https://picsum.photos/200/300' alt='Random'/></a>
  </React.Fragment>
);*/
/** React Challenge 3 */
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

root.render(
  <React.Fragment>
    <div className='section'>
      <h1 className='heading'>Hello Sir</h1>
      <p className='greetingMessage' style={wishesCssStyle}>{wishesMessage}</p>
    </div>
  </React.Fragment>
);