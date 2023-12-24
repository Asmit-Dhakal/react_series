import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)
let myObj={
  username:"Asmit",
  age:21
}
let newArray=[1,2,3,4]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card username='chai or code' btnText='Click Me'/>
      <Card username='Asmit dhakal' btn Text='Call  Me'/>
    </>
  )
}

export default App
