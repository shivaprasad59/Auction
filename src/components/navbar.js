import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../assets/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
const Navbar = () => {
    const [count,setCount]=useState(0);
    const handleCount=()=>{
        setCount(count+1);
    }
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={logo} className='logo' alt='Logo'/><h2 className='logoname'>PAWN-IT</h2></Link>

                    <div className="collapse navbar-collapse" >
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link " to="/Login"><h5 className='navbar-h5'><FontAwesomeIcon icon={faUser} />Login</h5></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/SignUp"><h5 className='navbar-h5'><FontAwesomeIcon icon={faUserPlus} />SignUp</h5></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/Cart"><h5 className='navbar-h5'><FontAwesomeIcon icon={faCartPlus} />Cart</h5></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default Navbar