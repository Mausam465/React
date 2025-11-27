import { useState } from "react"

function App() {
  const[count,setstate]=useState(0);
  const[Submitted,setsubmitted]=useState(false);
  function click(){
     setsubmitted(true);
    }
  return(
    <div>
    <h1>Hi! I am Mausam</h1>
    <h1>Count Students:{count}</h1>
    <input type="text" name="name"  placeholder="Enter your name" /><br />
    <input type="text" name="email"  placeholder="enter your email" /><br />
    <button onClick={()=> setstate(count+1)}>Increase</button>
    <button onClick={()=> setstate(count-1)}>Decrease</button>
    <button onClick={click}>Submit</button>
    {Submitted && <h2>Form Submitted</h2>}

    </div>
  );
}

export default App
