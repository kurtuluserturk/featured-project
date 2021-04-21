import React from 'react'
import Title from '../components/Title'
import { useGlobalContext } from '../context'

const Contact = () => {

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
                <Title name="contact" title="us" />
                <form onSubmit={handleContactFormSubmit}>
                    <div className="form-row d-flex justify-content-center">
                        <div className="form-group col-md-6">
                            <label htmlFor="contactFirstName">First name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="contactFirstName"
                                placeholder="First name"
                                defaultValue={user && user.firstName}
                                onChange={(e) => { saveFirstName(e) }}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row d-flex justify-content-center">
                        <div className="form-group col-md-6">
                            <label htmlFor="contactLastName">Last name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="contactLastName"
                                placeholder="Last name"
                                defaultValue={user && user.lastName}
                                onChange={(e) => { saveLastName(e) }}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row d-flex justify-content-center">
                        <div className="form-group col-md-6">
                            <label htmlFor="contactEmail">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="contactEmail"
                                placeholder="Email"
                                defaultValue={user && user.email}
                                onChange={(e) => { saveEmail(e) }}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row d-flex justify-content-center">
                        <div className="form-group col-md-6">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phone"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                placeholder="777-444-9999"
                                onChange={(e) => { savePhone(e) }}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row d-flex justify-content-center">
                        <div className="form-group col-md-6">
                            <label htmlFor="myCountry">Country</label>
                            <input
                                type="text"
                                className="form-control"
                                id="myCountry"
                                list="countryList"
                                onChange={(e) => { saveCountryCode(e) }}
                                required
                            />
                            <datalist id="countryList">
                                <option value="TR">Turkey</option>
                                <option value="US">United States of America</option>
                                <option value="GB">United Kingdom</option>
                                <option value="DE">Germany</option>
                                <option value="SE">Sweden</option>
                                <option value="KE">Kenya</option>
                                <option value="BR">Brazil</option>
                                <option value="ZW">Zimbabwe</option>
                            </datalist>
                        </div>
                    </div>
                    <div className="form-row d-flex justify-content-center">
                        <div className="form-group col-lg-6 col-md-6">
                            <label htmlFor="contactTextarea">Your Message</label>
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
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
