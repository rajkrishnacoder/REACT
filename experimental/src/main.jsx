import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import { Provider } from "react-redux"
import {store} from "./app/store"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path="" element={<Home/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
