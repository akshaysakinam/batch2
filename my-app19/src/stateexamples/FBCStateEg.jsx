import React, { useState } from 'react'

const FBCStateEg = () => {
    const[count,setState]=useState(0);
    function increment(){
        setState((c)=>c+1);
    }
    function decrement(){
        setState((c)=>c-1);
    }
    function reset(){
        setState(0);
    }
  return (
    <div>
        {count}
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default FBCStateEg