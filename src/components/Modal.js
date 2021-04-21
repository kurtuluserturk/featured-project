import React from 'react'
import { useGlobalContext } from "../context";

const Modal = () => {
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
        return <h3>{user.firstName} is loggged in</h3>;
    }

    // if there's no user, show the login form
    return (
        <div>
            <h5>Log in Lorem</h5>
            <form onSubmit={handleModalSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="firstName">First name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            placeholder="First name"
                            value={firstName}
                            onChange={(e) => { saveFirstName(e) }}
                            required
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lastName">Last name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            placeholder="Last name"
                            value={lastName}
                            onChange={(e) => { saveLastName(e) }}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => { saveEmail(e) }}
                            required
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" required />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Log in</button>
            </form>
        </div>
    )
}

export default Modal
