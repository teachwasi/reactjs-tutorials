import React from 'react';
import { add,sub,mul,div } from './Calculator';

function App(){
    return(
        <React.Fragment>
            <div className='section'>
            <h1 className='heading'>Calculator Using Component</h1>
            <p><strong>Results: </strong></p>
            <p>Sum: {add(5,6)}</p>
            <p>Sub: {sub(5,6)}</p>
            <p>Mul: {mul(5,6)}</p>
            <p>Div: {div(5,6)}</p>
            </div>
        </React.Fragment>
    )
}
export default App