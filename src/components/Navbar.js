import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo-lorem.svg'
import Modal from './Modal'
import { useGlobalContext } from "../context";
import { useTranslation } from "react-i18next"

const Navbar = () => {

    const [t, i18n] = useTranslation('common');

    const { user } = useGlobalContext();

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
                            {t('navbar.home')}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link text-dark">
                            {t('navbar.contact')}
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {t('navbar.dropdown.languages')}
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#" onClick={() => i18n.changeLanguage('tr')} >
                                {t('navbar.dropdown.turkish')}
                            </a>
                            <a className="dropdown-item" href="#" onClick={() => i18n.changeLanguage('en')} >
                                {t('navbar.dropdown.english')}
                            </a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                            {user ? user.firstName : t('navbar.login')}
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
