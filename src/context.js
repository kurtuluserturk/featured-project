import React, { useContext, useState } from "react"

const UserContext = React.createContext()

const UserProvider = ({ children }) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [countryCode, setCountryCode] = useState("")
    const [message, setMessage] = useState("")
    const [user, setUser] = useState()

    const handleModalSubmit = e => {
        e.preventDefault()
        const user = { firstName, lastName, email }
        setUser(user)
        localStorage.setItem('user', JSON.stringify(user))
    }

    const saveFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const saveLastName = (e) => {
        setLastName(e.target.value)
    }
    const saveEmail = (e) => {
        setEmail(e.target.value)
    }
    const savePhone = (e) => {
        setPhone(e.target.value)
    }
    const saveCountryCode = (e) => {
        setCountryCode(e.target.value)
    }
    const saveMessage = (e) => {
        setMessage(e.target.value)
    }

    const handleContactFormSubmit = e => {
        e.preventDefault()
        const userInfo =
        {
            firstName,
            lastName,
            email,
            phone,
            countryCode,
            message
        }
        console.log(JSON.stringify(userInfo))
    }

    return (
        <UserContext.Provider
            value={{
                firstName,
                lastName,
                email,
                user,
                phone,
                countryCode,
                message,
                handleModalSubmit,
                saveFirstName,
                saveLastName,
                saveEmail,
                savePhone,
                saveCountryCode,
                saveMessage,
                handleContactFormSubmit
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(UserContext)
};

export { UserContext, UserProvider }