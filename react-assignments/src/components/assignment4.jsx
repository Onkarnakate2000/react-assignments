import { useState,useMemo } from 'react';

function Assignment4() {
    const [counter, setCounter] = useState(0);

    function handleIncrement(){
        console.log("increment")
        setCounter(counter => counter+1);
    }

    function handleDecrement(){
        console.log("decrement")
        setCounter(counter=>counter-1);
     }
  return (
    <>
    
    <button onClick={handleIncrement}>Increment</button>
    <CounterUpdate value={counter} />
    <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}

function CounterUpdate({value}){
    return(<>
        <div>{value}</div>
    </>)
}

export default Assignment4;
