import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
