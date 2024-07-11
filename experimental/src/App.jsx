import React, { useState } from "react"
import { Outlet } from "react-router-dom"
import { TestProvider } from "./context/test.js"
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'


function App() {
 
  const [username, setData] = useState("my name is rajkrishna debnath")

  return (
    <TestProvider value={{username, setData}} >
      <Header/>
      <Outlet/>
      <Footer/>
    </TestProvider>
  )
}

export default App
    