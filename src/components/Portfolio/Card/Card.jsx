import React from "react";
import { BsCode } from "react-icons/bs";
import { ImCheckmark2 } from "react-icons/im";
import "./Card.css";

const Card = ({ project }) => {
    const { image, name, techs, description, demo, code } = project;
    return (
        <div className="app__portfolio-card">
            <div className="image">
                <img src={image} alt={name} />
            </div>
            <div className="content">
                <h3 className="small-title">{name}</h3>
                <div className="tech">
                    <ul>
                        {techs.map((tech, index) => (
                            <li key={index} className="alt-text">
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="main-text">{description}</div>
                <div className="btns">
                    <a
                        href={code}
                        target="_blank"
                        rel="noreferrer"
                        className="btn"
                    >
                        <BsCode />
                        Code
                    </a>
                    <a
                        href={demo}
                        target="_blank"
                        rel="noreferrer"
                        className="btn"
                    >
                        <ImCheckmark2 />
                        Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
