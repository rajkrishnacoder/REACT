import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/User.contextProvider'

function App() {
  const [count, setCount] = useState("hello")

  return (
    <UserContextProvider>
      <h1>hello world</h1>
      <Login />
      <Profile /> 
    </UserContextProvider>
  )
}

export default App
