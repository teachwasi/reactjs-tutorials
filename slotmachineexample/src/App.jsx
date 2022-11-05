import React from 'react';
import SlotMachine from './SlotMachine';
function App(){
    return(
        <React.Fragment>
            <div className='slotmachinebox'>
                <h2 className="heading">Slot Machine Game</h2>
                <div className='subsection'>
                    <SlotMachine x="S" y="S" z="S"/>
                </div>
                <div className='subsection'>
                    <SlotMachine x="A" y="S" z="S"/>
                </div>
                <div className='subsection'>
                    <SlotMachine x="Q" y="S" z="A"/>
                </div>
            </div>
        </React.Fragment>
    )
}
export default App