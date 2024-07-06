import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  const addValue = ()=>{
    if(count < 20)setCount(count+1)
  }

  return (
    <>
     <h1>hello react: {count}</h1>
     <button onClick={()=> {if(count > 0)setCount(count-1)}}>-</button>
     <button onClick={addValue}>+</button>
    </>
  )
}

export default App
