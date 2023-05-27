import React from 'react'
import css from '../assets/scss/components/Hero.module.scss'
import photo from '../assets/images/photo.webp'


const Hero = () => {
    return (
        <section className={css.hero} id="hero">
            <div className={css.hero__container}>
                <div className={css.hero__text_container}>
                    <h1 className={css.hero__title}>Hi 👋,<br />
                        My name is<br />
                        <span className={css.hero__name}>Oleh Hrytsak</span><br />
                        I build things for web
                    </h1>
                </div>
                <div className={css.hero__photo_container}>
                    <img src={photo} alt="Photo" className={css.hero__photo} />
                </div>
            </div>
        </section>
    )
}

export default Hero