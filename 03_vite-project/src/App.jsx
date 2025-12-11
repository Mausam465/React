import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
//   const [count, setCount] = useState(0)

// we can also pass object like this
// **************************************************
//   let myobj={
//     username:"hitesh",
//     age:21
//   }
//   let myarr=[1,2,3];
// **************************************************

  return (
    <>  
    {/* <Card channel="chaiaurcode" someobj={myarr}/> */}
    <Card username="Hitesh" btntext="Not now"/>
    <Card username="Nitin" btntext="Already Done"/>
    </>
  )
}

export default App
