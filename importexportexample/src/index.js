import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
//import name,{profile,newskill,mySkillSet} from './App';
//import * as app from './App';
import {newskill} from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
/*root.render(
  <React.Fragment>
    <div className='section'>
      <h1 className='heading'>Import & Export List</h1>
      <ol>
        <li>{name}</li>
        <li>{profile}</li>
        <li>{newskill}</li>
        <li>{mySkillSet()}</li>
      </ol>
    </div>
  </React.Fragment>
);*/

/*root.render(
  <React.Fragment>
    <div className='section'>
      <h1 className='heading'>Import & Export List Using Wild Card</h1>
      <ol>
        <li>{app.default}</li>
        <li>{app.profile}</li>
        <li>{app.newskill}</li>
        <li>{app.mySkillSet()}</li>
      </ol>
    </div>
  </React.Fragment>
);*/
root.render(
  <React.Fragment>
    <div className='section'>
      <h1 className='heading'>Import & Export List Using Single Way</h1>
      <ol>
        <li>{newskill}</li>
      </ol>
    </div>
  </React.Fragment>
);