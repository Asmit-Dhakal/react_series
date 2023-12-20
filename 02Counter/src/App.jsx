import { useState  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)
  //here counter is variable and setCounter is a function /method used to update counter
  //let counter=15
  const addValue=()=>{
    console.log("Clicked",counter);
 counter=counter+1;
//setCounter(counter+1)
setCounter(counter)
  }
  
  return (
    <>
      <h1>Simple code run</h1>
      <h2>Counter value:{counter}</h2>
      <button
      onClick={addValue}
       >Add Value{counter}</button>
      <br/>
      <button>Remove Value{counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
