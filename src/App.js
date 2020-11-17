import React, { useState} from 'react';
import './App.css';
import {Msg} from './Msg.js';

function App() {
  let [ count, setCount] = useState(1)
  let [ color, setColor] = useState(true)
  return (
    <div className={`App ${color ? 'change-color' : ''}`}>
    {/* <h1>PAKISTAN ZENDABAAD {count} </h1> */}
    <Msg counter={ count}/>
    <h3>Color Changer ={color ? 'green' : ' drak blue'}</h3>
    <br/>
    <button onClick={()=> setCount(++count)}>Update Value</button>
    <br/>
    <button onClick={()=> setColor(!color)}>Update Color</button>
    <div> 

      hi code main eror agya :( galt build bna li :(
        <h2>surge ulr work nhi kr rah </h2>
        <h2>surge ulr change kr diya phir bhi kam nhi kr rah h masla kya h </h2>
        <h2>surge ulr error test6</h2>
    </div>
   
  </div>
  );
}

export default App;
