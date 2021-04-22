import React from 'react'
import Title from '../components/Title'
import { useGlobalContext } from '../context'
import { useTranslation } from "react-i18next"

const Contact = () => {

    const [t] = useTranslation('common');

    const {
        user,
        handleContactFormSubmit,
        saveFirstName,
        saveLastName,
        saveEmail,
        savePhone,
        saveCountryCode,
        saveMessage
    } = useGlobalContext();

    return (
        <div className="py-5">
            <div className="container">
                <Title name={t('contact.name')} title={t('contact.title')} />
                <form onSubmit={handleContactFormSubmit}>
                    <div className="form-row d-flex justify-content-center">
                        <div className="form-group col-md-6">
                            <label htmlFor="contactFirstName">{t('contact.firstName')}:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="contactFirstName"
                                placeholder={t('contact.firstName')}
                                defaultValue={user && user.firstName}
                                autoComplete="name"
                                onChange={(e) => { saveFirstName(e) }}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row d-flex justify-content-center">
                        <div className="form-group col-md-6">
                            <label htmlFor="contactLastName">{t('contact.lastName')}:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="contactLastName"
                                placeholder={t('contact.lastName')}
                                defaultValue={user && user.lastName}
                                onChange={(e) => { saveLastName(e) }}
                                autoComplete="name"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row d-flex justify-content-center">
                        <div className="form-group col-md-6">
                            <label htmlFor="contactEmail">{t('contact.email')}:</label>
                            <input
                                type="email"
                                className="form-control"
                                id="contactEmail"
                                placeholder={t('contact.email')}
                                defaultValue={user && user.email}
                                onChange={(e) => { saveEmail(e) }}
                                autoComplete="email"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row d-flex justify-content-center">
                        <div className="form-group col-md-6">
                            <label htmlFor="phone">{t('contact.phone')}:</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phone"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                placeholder="777-444-9999"
                                onChange={(e) => { savePhone(e) }}
                                autoComplete="tel"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row d-flex justify-content-center">
                        <div className="form-group col-md-6">
                            <label htmlFor="myCountry">{t('contact.country')}:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="myCountry"
                                list="countryList"
                                onChange={(e) => { saveCountryCode(e) }}
                                autoComplete="country"
                                required
                            />
                            <datalist id="countryList">
                                <option value="TR">{t('contact.countries.turkey')}</option>
                                <option value="US">{t('contact.countries.usa')}</option>
                                <option value="GB">{t('contact.countries.uk')}</option>
                                <option value="DE">{t('contact.countries.germany')}</option>
                                <option value="SE">{t('contact.countries.sweden')}</option>
                                <option value="KE">{t('contact.countries.kenya')}</option>
                                <option value="BR">{t('contact.countries.brazil')}</option>
                                <option value="ZW">{t('contact.countries.zimbabwe')}</option>
                            </datalist>
                        </div>
                    </div>
                    <div className="form-row d-flex justify-content-center">
                        <div className="form-group col-lg-6 col-md-6">
                            <label htmlFor="contactTextarea">{t('contact.yourMessage')}:</label>
                            <textarea
                                style={{ resize: "none" }}
                                className="form-control"
                                id="contactTextarea"
                                rows="3"
                                onChange={(e) => { saveMessage(e) }}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary">{t('contact.send')}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
