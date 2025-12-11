import React, { useState } from "react";
function Counter(){
    let [counter,setCount] = useState(15);
    //let counter=15
    const addValue= ()=>{
        // setCount(counter+1)
        // setCount(counter+1)
        // setCount(counter+1)
        // setCount(counter+1)

        //instead of this we can use this to increase value 
        setCount(prevcount => prevcount+1)
        setCount(prevcount => prevcount+1)
        setCount(prevcount => prevcount+1)
        setCount(prevcount => prevcount+1) //now the value will become from 15 to 19 and so on
    }
    const removeValue = ()=>{
        setCount(counter-1)
    }

    return(
        <>
        <h1>COUNTER</h1>
        <h2>Counter value: {counter}</h2>
        <button onClick={addValue}>Add value{counter}</button>
        <button onClick={removeValue}>Remove value</button>
        </>
    )
}
export default Counter;