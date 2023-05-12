import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import Antiques from './components/Antiques'
import Books from './components/Books'
import Navbar from './components/navbar'
import AdminHome from './components/Admin/Home'
const App = () => {
  return (
    <div>
      
    <Navbar/>
      <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Books" element={<Books/>}/>
        <Route path="/Antiques" element={<Antiques/>}/>
        <Route path="/AdminHome" element={<AdminHome/>}/>
      </Routes>
      </>
    </div>
  )
}

export default App