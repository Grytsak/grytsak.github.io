import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import css from '../assets/scss/components/Footer.module.scss'


const Footer = () => {
    return (
        <footer className={css.footer} id="contacts">
            <div className={css.footer__container}>
                <p className={css.footer__email}>hrytsak.oleh7@gmail.com</p>
                <div className={css.footer__socials}>
                        <a href="https://github.com/Grytsak" className={css.footer___social_icon_link}>
                            <FontAwesomeIcon icon={['fab', 'github']} />
                        </a>
                        <a href="https://www.linkedin.com/in/oleh-hrytsak-5a5aa3253/" className={css.footer___social_icon_link}>
                            <FontAwesomeIcon icon={['fab', 'linkedin']} />
                        </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer