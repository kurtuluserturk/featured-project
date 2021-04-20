import React from 'react'
import {
    FaInstagramSquare,
    FaLinkedin,
    FaGithubSquare
} from "react-icons/fa"

const social = [
    {
        id: 1,
        icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
        url: "https://www.instagram.com",
    },
    {
        id: 2,
        icon: <FaLinkedin className="social-icon"></FaLinkedin>,
        url: "https://www.linkedin.com",
    },
    {
        id: 4,
        icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
        url: "https://github.com",
    }
]

const socialLinks = social.map(link => {
    return (
        <li key={link.id}>
            <a href={link.url} className="social-link">
                {link.icon}
            </a>
        </li>
    )
})

export default ({ styleClass }) => {
    return (
        <ul className={`social-links ${styleClass ? styleClass : ""}`}>{socialLinks}</ul>
    )
}
