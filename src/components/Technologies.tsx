import React from 'react'
import css from '../assets/scss/components/Technologies.module.scss'

import html5 from '../assets/images/html5.svg'
import cssImg from '../assets/images/css.svg'
import js from '../assets/images/js.svg'
import reactImg from '../assets/images/react.svg' 
import redux from '../assets/images/redux.svg'
import nodejs from '../assets/images/nodejs.webp'



const Technologies = () => {
    return (
        <section className={css.tech} id="technologies">
            <div className={css.tech__container}>
                <h2 className="main-title">My Tech Stack</h2>
                <h3 className="main-subtitle">Technologies I’ve been working with recently</h3>
                <div className={css.tech__tech_stack_container}>
                    <img src={html5} alt="html5" className={css.tech__img} />
                    <img src={cssImg} alt="css" className={css.tech__img} />
                    <img src={js} alt="js" className={css.tech__img} />
                    <img src={reactImg} alt="react" className={css.tech__img} />
                    <img src={redux} alt="redux" className={css.tech__img} />
                    <img src={nodejs} alt="nodejs" className={css.tech__img} />
                </div>
            </div>
        </section>
    )
}

export default Technologies