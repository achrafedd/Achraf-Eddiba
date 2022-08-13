import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsPaperclip } from "react-icons/bs";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
    return (
        <section className="app__hero" id="home">
            <div className="container">
                <div className="app__hero-content">
                    <h1 className="main-title">I'm Achraf Eddiba</h1>
                    <h2 className="small-title">
                        <span>I'm a Frontend Developer</span>. Based in Morocco
                        i learn everything about Web Technologies.
                    </h2>
                    <div className="box">
                        <div className="social-media">
                            <ul>
                                <li>
                                    <a
                                        href="https://github.com/achrafedd"
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{ color: "#1B1F23" }}
                                        className="icon"
                                    >
                                        <AiFillGithub />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/achraf-eddiba-441267198/"
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{ color: "#007EBB" }}
                                        className="icon"
                                    >
                                        <FaLinkedinIn />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/achrafedd"
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{ color: "#8a3ab9" }}
                                        className="icon"
                                    >
                                        <FaInstagram />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="cv">
                            <a
                                href="./my_cv.pdf"
                                download={true}
                                className="btn"
                            >
                                <BsPaperclip />
                                Download cv
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
