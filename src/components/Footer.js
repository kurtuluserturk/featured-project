import React from 'react'
import SocialLinks from '../constants/socialLinks'
import { useTranslation } from "react-i18next"

const Footer = () => {

    const [t] = useTranslation('common');

    return (
        <footer className="footer">
            <div>
                <SocialLinks styleClass="footer-links" />
                <h4>{t('footer.copyright')} &copy;{new Date().getFullYear()}
                    <span> DevKurtuluş</span> {t('footer.rights')}
                </h4>
            </div>
        </footer>
    )
}

export default Footer
