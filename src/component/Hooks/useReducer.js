import React, { useReducer, useState } from 'react';
import "./style.css";

const reducer = (state, action) => {
    if(action.type === "INCR") {
        state = state + 1;
    }

    if(state >0 && action.type === "DCER") {
        state = state - 1;
    }

    return state;
}

const UseReducer = () => {
    const initialData = 10;
  //const [myNumb, setMyNumb] = useState(initialData);
    const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div class="button2" onClick={ () => dispatch({type:"INCR"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCER
        </div>
        <div class="button2" onClick={ () => dispatch({type:"DCER"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DCER
        </div>
      </div>
    </>
  );
}

export default UseReducer
