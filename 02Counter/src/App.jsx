import { useState  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)
  //here counter is variable and setCounter is a function /method used to update counter
  const addValue=()=>{
    
 counter=counter+1;
//setCounter(counter+1)
setCounter(counter)
console.log("Clicked",counter);
  }



  const removeValue=()=>{
    counter=counter-1;
    setCounter(counter)
    console.log("Clicked",counter)
  }
  return (
    <>
      <h1>Simple code run</h1>
      <h2>Counter value:{counter}</h2>
      <button
      onClick={addValue}
       >Add Value{counter}</button>
      <br/>
      <button
      onClick={removeValue}>Remove Value{counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
