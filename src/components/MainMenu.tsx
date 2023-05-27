import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import css from '../assets/scss/components/MainMenu.module.scss'
import logo from '../assets/images/logo.svg'

const MainMenu = () => {
    const [isMobile, setMobile] = useState(false)

    const toggleMenu = () => {
        setMobile(!isMobile)
        document.body.classList.toggle('fixed-position')
    }

    return (
        <div className={`${css.menu} ${isMobile ? 'menu_mobile' : ''}`}>
            <div className={css.menu__container}>
                <div className={css.menu__logo_container}>
                    <img className={css.menu__logo} src={logo} alt='logo' />
                    Portfolio
                </div>

                <div className={css.menu__links_container}>
                    <a  href="#hero" 
                    className={css.menu__link}
                    rel="noreferrer">Home</a>
                    {/* <a  href="#about" 
                    className={css.menu__link}
                    rel="noreferrer">About</a> */}
                    <a  href="#technologies" 
                    className={css.menu__link}
                    rel="noreferrer">Technologies</a>
                    <a  href="#projects" 
                    className={css.menu__link}
                    rel="noreferrer">Projects</a>
                    <a  href="#contacts" 
                    className={css.menu__link}
                    rel="noreferrer">Contact</a>
                

                    <div className={css.menu__socials}>
                        <a href="https://github.com/Grytsak" className={css.menu__social_icon_link}>
                            <FontAwesomeIcon icon={['fab', 'github']} />
                        </a>
                        <a href="https://www.linkedin.com/in/oleh-hrytsak-5a5aa3253/" className={css.menu__social_icon_link}>
                            <FontAwesomeIcon icon={['fab', 'linkedin']} />
                        </a>
                    </div>
                </div>
                <div className={css.menu_mobile__main_icon} onClick={toggleMenu}>
                        <FontAwesomeIcon icon={['fas', 'bars']} className={css.menu__humburger_open} />
                        <FontAwesomeIcon icon={['fas', 'x']} className={css.menu__humburger_close} />
                </div>
            </div>
            <div className={css.menu_mobile__container}>
                    <a  href="" 
                    className={css.menu_mobile__link}
                    rel="noreferrer">Home</a>
                    {/* <a  href="#about" 
                    className={css.menu_mobile__link}
                    rel="noreferrer">About</a> */}
                    <a  href="" 
                    className={css.menu_mobile__link}
                    rel="noreferrer">Technologies</a>
                    <a  href="" 
                    className={css.menu_mobile__link}
                    rel="noreferrer">Projects</a>
                    <a  href="" 
                    className={css.menu_mobile__link}
                    rel="noreferrer">Contact</a>

                <div className={css.menu_mobile__socials}>
                    <a  href="https://github.com/Grytsak" 
                        className={css.menu_mobile__social_icon_link} 
                        target="_blank"
                        rel="noreferrer">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                    <a  href="https://www.linkedin.com/in/oleh-hrytsak-5a5aa3253/" 
                        className={css.menu_mobile__social_icon_link} 
                        target="_blank"
                        rel="noreferrer">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MainMenu