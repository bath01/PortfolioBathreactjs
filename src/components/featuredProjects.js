import React from "react";
import "../Styles/featuredProject.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faGitlab,
} from "@fortawesome/free-brands-svg-icons";


const FeatureProject = () => {
    
    return (
        <>
            <section className="section projects">
                <div className="section-title">
                    <h2>featured projects</h2>
                    <div className="underline"></div>
                </div>
                <div className="section-center projects-center">
                    <article className="project">
                        <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained project-img">
                         <img />
                        </div>
                        <div className="project-info">
                            <span className="project-number">01.</span>
                            <a className="project-slug" href=""><h3>ANGULAR PROJECT</h3></a>
                            <p className="project-desc">
                                I'm baby salvia lomo yuccie, vinyl seitan XOXO tousled bicycle rights slow-carb occupy taiyaki microdosing brunch. Photo booth slow-carb health goth kickstarter cardigan. Roof party pour-over swag pork belly glossier DIY farm-to-table godard locavore. Chicharrones gastropub slow-carb food truck tumblr semiotics, heirloom ugh wolf unicorn thundercats health goth.
                            </p>
                            <div className="project-stack">
                                <span>angular</span>
                                <span>firebase</span>
                            </div>
                            <div className="project-links">
                                <a href="">
                                    <FontAwesomeIcon className="service-icon" icon={faGithub} />
                                </a>
                                <a href="">
                                    <FontAwesomeIcon className="service-icon" icon={faGitlab} />
                                </a>
                            </div>
                        </div>
                    </article>
                    <article className="project">
                        <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained project-img">
                         <img />
                        </div>
                        <div className="project-info">
                            <span className="project-number">02.</span>
                            <a className="project-slug" href=""><h3>REACT PROJECT</h3></a>
                            <p className="project-desc">
                                I'm baby salvia lomo yuccie, vinyl seitan XOXO tousled bicycle rights slow-carb occupy taiyaki microdosing brunch. Photo booth slow-carb health goth kickstarter cardigan. Roof party pour-over swag pork belly glossier DIY farm-to-table godard locavore. Chicharrones gastropub slow-carb food truck tumblr semiotics, heirloom ugh wolf unicorn thundercats health goth.
                            </p>
                            <div className="project-stack">
                                <span>REACT</span>
                                <span>REDUX</span>
                            </div>
                            <div className="project-links">
                                <a href="">
                                    <FontAwesomeIcon className="service-icon" icon={faGithub} />
                                </a>
                                <a href="">
                                    <FontAwesomeIcon className="service-icon" icon={faGitlab} />
                                </a>
                            </div>
                        </div>
                    </article>
                    <article className="project">
                        <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained project-img">
                         <img />
                        </div>
                        <div className="project-info">
                            <span className="project-number">03.</span>
                            <a className="project-slug" href=""><h3>BATH PROJECT</h3></a>
                            <p className="project-desc">
                                I'm baby salvia lomo yuccie, vinyl seitan XOXO tousled bicycle rights slow-carb occupy taiyaki microdosing brunch. Photo booth slow-carb health goth kickstarter cardigan. Roof party pour-over swag pork belly glossier DIY farm-to-table godard locavore. Chicharrones gastropub slow-carb food truck tumblr semiotics, heirloom ugh wolf unicorn thundercats health goth.
                            </p>
                            <div className="project-stack">
                                <span>BATH</span>
                                <span>STRAPI</span>
                            </div>
                            <div className="project-links">
                                <a href="">
                                    <FontAwesomeIcon className="service-icon" icon={faGithub} />
                                </a>
                                <a href="">
                                    <FontAwesomeIcon className="service-icon" icon={faGitlab} />
                                </a>
                            </div>
                        </div>
                    </article>
                </div>
                <a className="btn center-btn" href="">projects</a>
            </section>
        </>
    )
} 

export default FeatureProject;