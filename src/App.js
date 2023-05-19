import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import Antiques from './components/Antiques'
import Books from './components/Books'
import Navbar from './components/navbar'
import AdminHome from './components/Admin/Home'
import Login from './components/Authentication/Login'
import Signup from './components/Authentication/Signup'
import Antiques1 from '../src/components/Admin/Antiques'
import Cart from './components/Cart'
const App = () => {
  return (
    <div>
      
    <Navbar/>
      <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Books" element={<Books/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Antiques" element={<Antiques/>}/>
        <Route path="/AdminHome" element={<AdminHome/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<Signup/>}/>
        <Route path="/Admin/Antiques" element={<Antiques1/>}/>
      </Routes>
      </>
    </div>
  )
}

export default App