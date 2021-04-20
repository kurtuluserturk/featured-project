import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo-lorem.svg'
import Modal from './Modal'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/">
                <img src={logo} alt="store" className="navbar-brand" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link text-dark">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link text-dark">
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Languages
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Turkish</a>
                            <a className="dropdown-item" href="#">English</a>
                        </div>
                    </li>
                    <li className="nav-item">

                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                            Log in
                        </button>

                        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <Modal />
                                </div>
                            </div>
                        </div>

                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
