import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//   const addvalue = ()=>{
//     setCount(count+1)
    
//   }
//   const removevalue=()=>{
//     setCount(count-1)
//   }

//   return (
//     <>
//      <h2>counter value:{count}</h2>
//      <button onClick={addvalue}>Add value{count}</button>  
//      <br />
//      <button onClick={removevalue}>remove value{count}</button>
//      <p>footer: {count}</p>
//     </>
function App(){
  const[count,setCount]=useState(0)
return (
  <>
  <h2>count:{count}</h2>
  <button onClick={()=>setCount(count+1)}>Increase</button>
  <button onClick={()=>setCount(count-1)}>Decrease</button>
  </> 

)
}

export default App
