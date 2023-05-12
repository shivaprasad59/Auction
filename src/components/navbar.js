import React from 'react'
import './navbar.css'
import logo from '../assets/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logo} className='logo'/><h1 className='logoname'>PAWN-IT</h1></a>

                    <div className="collapse navbar-collapse" >
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link " href="#"><h5 className='navbar-h5'><FontAwesomeIcon icon={faUser} />Login</h5></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><h5 className='navbar-h5'><FontAwesomeIcon icon={faUserPlus} />SignUp</h5></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default navbar