import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import css from '../assets/scss/components/Projects.module.scss'
import project1 from '../assets/images/promo_republic_375.webp'
import project2 from '../assets/images/notes_pet_375.webp'


const Projects = () => {
    return (
        <section className={css.projects} id="projects">
            <div className={css.projects__container}>
                <h2 className="main-title">Projects</h2>
                <h3 className="main-subtitle">Things I’ve built so far</h3>
                <div className={css.projects__pet_projects_container}>

                    <div className={css.projects__item}>
                        <img src={project1} alt="PromoRepublic" className={css.projects__item_img} />
                        <div className={css.projects__item_bottom}>
                            <h4 className={css.projects__item_title}>PromoRepublic</h4>
                            <p className={css.projects__item_desc} style={{ paddingBottom: 23 }}>Worked on site and blog support from 2018 till 2021. Several complete redesigns.</p>
                            <p className={css.projects__item_techs}><b>Tech stack:</b>  HTML, CSS, JavaScript</p>
                            <div className={css.projects__item_techs}>
                                <FontAwesomeIcon icon={['fas', 'link']} />
                                <a href="https://promorepublic.com/en/" target="_blank" className={css.projects__item_techs_link}>Live Preview</a>
                            </div>
                        </div>
                    </div>

                    <div className={css.projects__item}>
                        <img src={project2} alt="Notes Manager" className={css.projects__item_img} />
                        <div className={css.projects__item_bottom}>
                            <h4 className={css.projects__item_title}>Notes Manager</h4>
                            <p className={css.projects__item_desc}>Created notes manager with authorization, creating notes and notebooks, move notes between notebooks.</p>
                            <p className={css.projects__item_techs}><b>Tech stack:</b>  HTML, CSS, React, NodeJs, Sass</p>
                            <div className={css.projects__item_links_container}>
                                <div className={css.projects__item_techs}>
                                    <FontAwesomeIcon icon={['fas', 'link']} />
                                    <a href="https://evernote-react-redux-hrytsak.cyclic.app/" target="_blank" className={css.projects__item_techs_link}>Live Preview</a>
                                </div>
                                <div className={css.projects__item_techs}>
                                    <FontAwesomeIcon icon={['fab', 'github']} />
                                    <a href="https://github.com/Grytsak/evernote-react-redux" target="_blank" className={css.projects__item_techs_link}>View Code</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Projects