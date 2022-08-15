import React from "react";
import { tecnologies } from "../../constants";
import "./Technologies.css";

const Technologies = () => {
    return (
        <section className="app__tech">
            <div className="container">
                <h2 className="small-title">
                    My experience includes but not limited
                </h2>
                <div className="techs">
                    <ul>
                        {tecnologies.map((tech) => (
                            <li key={tech.id} className="main-text">
                                <div className="image">
                                    <img src={tech.image} alt={tech.name} />
                                </div>
                                <span className="alt-text">{tech.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Technologies;
