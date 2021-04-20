import React from 'react'
import Title from '../components/Title'

const contact = () => {
    return (
        <div className="py-5">
            <div className="container">
                <Title name="contact" title="us" />
                <form autoComplete="off">
                    <div className="form-row d-flex justify-content-center">
                        <div className="form-group col-md-6">
                            <label htmlFor="contactFirstName">First name</label>
                            <input type="text" className="form-control" id="contactFirstName" placeholder="First name" required />
                        </div>
                    </div>
                    <div className="form-row d-flex justify-content-center">
                        <div className="form-group col-md-6">
                            <label htmlFor="contactLastName">Last name</label>
                            <input type="text" className="form-control" id="contactLastName" placeholder="Last name" required />
                        </div>
                    </div>
                    <div className="form-row d-flex justify-content-center">
                        <div className="form-group col-md-6">
                            <label htmlFor="contactEmail">Email</label>
                            <input type="email" className="form-control" id="contactEmail" placeholder="Email" required />
                        </div>
                    </div>
                    <div className="form-row d-flex justify-content-center">
                        <div className="form-group col-md-6">
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" className="form-control" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="777-444-9999" required />
                        </div>
                    </div>
                    <div className="form-row d-flex justify-content-center">
                        <div className="form-group col-md-6">
                            <label htmlFor="myInput">Country</label>
                            <input type="text" className="form-control" id="myInput" required />
                        </div>
                    </div>
                    <div className="form-row d-flex justify-content-center">
                        <div className="form-group col-lg-6 col-md-6">
                            <label htmlFor="contactTextarea">Your Message</label>
                            <textarea style={{ resize: "none" }} className="form-control" id="contactTextarea" rows="3" ></textarea>
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

export default contact
