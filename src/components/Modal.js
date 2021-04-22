import React from 'react'
import { useGlobalContext } from "../context";
import { useTranslation } from "react-i18next"

const Modal = () => {

    const [t] = useTranslation('common');

    const {
        firstName,
        lastName,
        email,
        user,
        handleModalSubmit,
        saveFirstName,
        saveLastName,
        saveEmail
    } = useGlobalContext();

    // if there's a user show the message below
    if (user) {
        return <h3>{user.firstName} {t('modal.userLogged')}</h3>;
    }

    // if there's no user, show the login form
    return (
        <div>
            <h5>{t('modal.title')}</h5>
            <form onSubmit={handleModalSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="firstName">{t('modal.firstName')}:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            placeholder={t('modal.firstName')}
                            value={firstName}
                            onChange={(e) => { saveFirstName(e) }}
                            autoComplete="name"
                            required
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lastName">{t('modal.lastName')}:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            placeholder={t('modal.lastName')}
                            value={lastName}
                            onChange={(e) => { saveLastName(e) }}
                            autoComplete="name"
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="email">{t('modal.email')}:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder={t('modal.email')}
                            value={email}
                            onChange={(e) => { saveEmail(e) }}
                            autoComplete="current-password"
                            required
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="password">{t('modal.password')}:</label>
                        <input type="password" className="form-control" id="password" autoComplete="current-password" placeholder={t('modal.password')} required />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">{t('modal.login')}</button>
            </form>
        </div>
    )
}

export default Modal
